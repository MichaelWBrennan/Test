import { z } from 'zod';

export function validateEnv() {
  const envSchema = z.object({
    DATABASE_URL: z.string(),
    REDIS_URL: z.string(),
    JWT_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    OPENAI_API_KEY: z.string(),
  });

  try {
    envSchema.parse(process.env);
  } catch (error) {
    console.error('Environment validation failed:', error);
    process.exit(1);
  }
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export function calculateRiskScore(factors: {
  securityRisk: number;
  complexityRisk: number;
  testCoverage: number;
  authorTrust: number;
}): number {
  const weights = {
    security: 0.4,
    complexity: 0.3,
    testCoverage: 0.2,
    authorTrust: 0.1
  };

  return Math.min(1, Math.max(0, 
    factors.securityRisk * weights.security +
    factors.complexityRisk * weights.complexity +
    (1 - factors.testCoverage) * weights.testCoverage +
    (1 - factors.authorTrust) * weights.authorTrust
  ));
}

export function maskSensitiveData(obj: any): any {
  const sensitiveKeys = ['password', 'token', 'secret', 'key'];
  
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const masked = { ...obj };
  
  for (const key in masked) {
    if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
      masked[key] = '***';
    } else if (typeof masked[key] === 'object') {
      masked[key] = maskSensitiveData(masked[key]);
    }
  }

  return masked;
}