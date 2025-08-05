import { Octokit } from '@octokit/rest';
import { config } from '../config';

class GitHubService {
  async getInstallationClient(installationId: string): Promise<Octokit> {
    // This would normally create an authenticated client for the installation
    return new Octokit({
      auth: `token ${config.auth.githubClientSecret}` // Placeholder
    });
  }

  async getAppClient(): Promise<Octokit> {
    return new Octokit({
      auth: `Bearer ${config.auth.githubClientSecret}` // Placeholder
    });
  }
}

export const githubService = new GitHubService();