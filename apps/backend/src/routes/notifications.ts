import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function notificationRoutes(fastify: FastifyInstance) {
  // Get notification configs
  fastify.get('/org/:orgId', async (request: FastifyRequest<{
    Params: { orgId: string }
  }>, reply: FastifyReply) => {
    return reply.send({ notifications: [] });
  });

  // Update notification config
  fastify.post('/org/:orgId', async (request: FastifyRequest<{
    Params: { orgId: string }
  }>, reply: FastifyReply) => {
    return reply.send({ status: 'updated' });
  });
}