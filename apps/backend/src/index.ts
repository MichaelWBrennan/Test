import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import { PrismaClient } from '@prisma/client';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { FastifyAdapter } from '@bull-board/fastify';
import Redis from 'ioredis';

import { githubRoutes } from './routes/github';
import { authRoutes } from './routes/auth';
import { rulesRoutes } from './routes/rules';
import { webhookRoutes } from './routes/webhooks';
import { billingRoutes } from './routes/billing';
import { notificationRoutes } from './routes/notifications';
import { setupQueues } from './services/queue';
import { config } from './config';

const prisma = new PrismaClient();
const redis = new Redis(config.redis.url);

async function buildApp() {
  const app = Fastify({
    logger: {
      level: config.app.logLevel,
      prettyPrint: config.app.env === 'development'
    }
  });

  // Security plugins
  await app.register(helmet, {
    contentSecurityPolicy: false
  });

  await app.register(cors, {
    origin: config.app.corsOrigins,
    credentials: true
  });

  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
    redis: redis
  });

  // JWT authentication
  await app.register(jwt, {
    secret: config.auth.jwtSecret,
    cookie: {
      cookieName: 'token',
      signed: false
    }
  });

  // Add context
  app.decorateRequest('prisma', null);
  app.decorateRequest('redis', null);
  app.addHook('onRequest', async (request) => {
    request.prisma = prisma;
    request.redis = redis;
  });

  // Setup job queues
  const queues = setupQueues(redis);
  
  // Bull Board for queue monitoring
  const serverAdapter = new FastifyAdapter();
  createBullBoard({
    queues: Object.values(queues).map(queue => new BullMQAdapter(queue)),
    serverAdapter
  });
  serverAdapter.setBasePath('/admin/queues');
  await app.register(serverAdapter.registerPlugin(), {
    prefix: '/admin/queues',
    basePath: '/'
  });

  // Health check
  app.get('/health', async () => {
    return { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version 
    };
  });

  // API routes
  await app.register(authRoutes, { prefix: '/api/auth' });
  await app.register(githubRoutes, { prefix: '/api/github' });
  await app.register(rulesRoutes, { prefix: '/api/rules' });
  await app.register(webhookRoutes, { prefix: '/api/webhooks' });
  await app.register(billingRoutes, { prefix: '/api/billing' });
  await app.register(notificationRoutes, { prefix: '/api/notifications' });

  // Error handler
  app.setErrorHandler(async (error, request, reply) => {
    request.log.error(error);
    
    if (error.validation) {
      return reply.status(400).send({
        error: 'Validation Error',
        message: error.message,
        details: error.validation
      });
    }

    if (error.statusCode) {
      return reply.status(error.statusCode).send({
        error: error.name,
        message: error.message
      });
    }

    return reply.status(500).send({
      error: 'Internal Server Error',
      message: 'Something went wrong'
    });
  });

  return app;
}

async function start() {
  try {
    const app = await buildApp();
    
    await app.listen({
      port: config.app.port,
      host: config.app.host
    });

    console.log(`🚀 Server running on http://${config.app.host}:${config.app.port}`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  start();
}

export { buildApp };