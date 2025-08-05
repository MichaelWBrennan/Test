export interface User {
  id: string;
  githubId: string;
  login: string;
  name?: string;
  email?: string;
  avatarUrl?: string;
}

export interface Organization {
  id: string;
  githubId: string;
  login: string;
  name?: string;
  plan: 'FREE' | 'TEAM' | 'GROWTH' | 'ENTERPRISE';
}

export interface MergeRule {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  conditions: {
    filePatterns?: string[];
    authorPatterns?: string[];
    branchPatterns?: string[];
    maxRiskScore?: number;
    requireTests?: boolean;
    blockPatterns?: string[];
  };
  actions: {
    autoApprove: boolean;
    autoMerge: boolean;
    requireReviews?: number;
    notify: boolean;
  };
}

export interface PullRequest {
  id: string;
  githubId: string;
  number: number;
  title: string;
  body?: string;
  state: 'OPEN' | 'CLOSED' | 'MERGED';
  riskScore?: number;
  aiAnalysis?: {
    summary: string;
    concerns: string[];
    recommendations: string[];
    categories: {
      security: number;
      breaking: number;
      complexity: number;
      testing: number;
      documentation: number;
    };
  };
}