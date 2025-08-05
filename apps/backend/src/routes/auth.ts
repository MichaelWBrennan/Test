import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function authRoutes(fastify: FastifyInstance) {
  // GitHub OAuth callback
  fastify.get('/github/callback', async (request: FastifyRequest<{
    Querystring: { code: string; state?: string; installation_id?: string }
  }>, reply: FastifyReply) => {
    const { code, installation_id } = request.query;
    
    // Exchange code for access token and handle user/org creation
    // Implementation would go here
    
    return reply.redirect('http://localhost:3000/dashboard');
  });

  // Get current user
  fastify.get('/me', {
    preHandler: [fastify.authenticate]
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ user: (request as any).user });
  });

  // Logout
  fastify.post('/logout', async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.clearCookie('token').send({ status: 'logged out' });
  });
}