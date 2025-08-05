import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function billingRoutes(fastify: FastifyInstance) {
  // Get billing info
  fastify.get('/org/:orgId', async (request: FastifyRequest<{
    Params: { orgId: string }
  }>, reply: FastifyReply) => {
    return reply.send({ plan: 'FREE', usage: { repositories: 0 } });
  });

  // GitHub Marketplace webhook
  fastify.post('/marketplace/webhook', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ status: 'ok' });
  });
}