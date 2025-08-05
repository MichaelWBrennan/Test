import { z } from 'zod';

const configSchema = z.object({
  app: z.object({
    port: z.number().default(3001),
    host: z.string().default('0.0.0.0'),
    env: z.enum(['development', 'production', 'test']).default('development'),
    logLevel: z.string().default('info'),
    corsOrigins: z.array(z.string()).default(['http://localhost:3000'])
  }),
  auth: z.object({
    jwtSecret: z.string(),
    githubClientId: z.string(),
    githubClientSecret: z.string(),
    githubWebhookSecret: z.string(),
    githubAppId: z.string(),
    githubPrivateKey: z.string()
  }),
  database: z.object({
    url: z.string()
  }),
  redis: z.object({
    url: z.string()
  }),
  openai: z.object({
    apiKey: z.string(),
    model: z.string().default('gpt-4-1106-preview')
  }),
  billing: z.object({
    stripeSecretKey: z.string(),
    stripeWebhookSecret: z.string(),
    githubMarketplaceWebhookSecret: z.string()
  }),
  notifications: z.object({
    smtpHost: z.string().optional(),
    smtpPort: z.number().optional(),
    smtpUser: z.string().optional(),
    smtpPass: z.string().optional(),
    fromEmail: z.string().default('noreply@automerge-pro.com')
  })
});

const rawConfig = {
  app: {
    port: parseInt(process.env.PORT || '3001'),
    host: process.env.HOST || '0.0.0.0',
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'info',
    corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000']
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-here',
    githubClientId: process.env.GITHUB_CLIENT_ID || '',
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    githubWebhookSecret: process.env.GITHUB_WEBHOOK_SECRET || '',
    githubAppId: process.env.GITHUB_APP_ID || '',
    githubPrivateKey: process.env.GITHUB_PRIVATE_KEY || ''
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/automerge_pro'
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: process.env.OPENAI_MODEL || 'gpt-4-1106-preview'
  },
  billing: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    githubMarketplaceWebhookSecret: process.env.GITHUB_MARKETPLACE_WEBHOOK_SECRET || ''
  },
  notifications: {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : undefined,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    fromEmail: process.env.FROM_EMAIL || 'noreply@automerge-pro.com'
  }
};

export const config = configSchema.parse(rawConfig);