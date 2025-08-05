import { analyzeNextFilesPullRequest, PRAnalysisInput } from '../src/services/ai-analyzer';

describe('AI Analyzer', () => {
  test('should analyze a simple documentation PR', async () => {
    const input: PRAnalysisInput = {
      title: 'Update README',
      body: 'Fixed typos and added examples',
      files: [{
        filename: 'README.md',
        status: 'modified',
        additions: 5,
        deletions: 2,
        patch: '@@ -1,3 +1,6 @@\n # Project\n-This is a project\n+This is an awesome project with examples'
      }],
      author: 'john-doe',
      baseBranch: 'main',
      headBranch: 'fix/readme-typos'
    };

    // Mock OpenAI to avoid actual API calls in tests
    jest.mock('openai');
    
    const result = await analyzeNextFilesPullRequest(input);
    
    expect(result.riskScore).toBeLessThan(0.3);
    expect(result.autoApprovalRecommended).toBe(true);
    expect(result.categories.documentation).toBeGreaterThan(0.5);
  });

  test('should flag high-risk security changes', async () => {
    const input: PRAnalysisInput = {
      title: 'Update authentication middleware',
      body: 'Changed JWT validation logic',
      files: [{
        filename: 'src/middleware/auth.ts',
        status: 'modified',
        additions: 20,
        deletions: 15,
        patch: '@@ JWT validation changes'
      }],
      author: 'new-contributor',
      baseBranch: 'main',
      headBranch: 'feature/auth-changes'
    };
    
    const result = await analyzeNextFilesPullRequest(input);
    
    expect(result.riskScore).toBeGreaterThan(0.5);
    expect(result.autoApprovalRecommended).toBe(false);
    expect(result.categories.security).toBeGreaterThan(0.5);
  });
});