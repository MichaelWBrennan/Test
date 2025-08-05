import { FastifyInstance } from 'fastify';

// JWT authentication middleware
declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: any, reply: any) => Promise<void>;
  }
}

export async function authMiddleware(fastify: FastifyInstance) {
  fastify.decorate('authenticate', async function(request: any, reply: any) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.status(401).send({ error: 'Unauthorized' });
    }
  });
}