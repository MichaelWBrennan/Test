import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create sample organization
  const org = await prisma.organization.create({
    data: {
      githubId: '12345',
      login: 'acme-corp',
      name: 'ACME Corporation',
      plan: 'TEAM',
      billingEmail: 'billing@acme.com'
    }
  });

  // Create sample user
  const user = await prisma.user.create({
    data: {
      githubId: '67890',
      login: 'john-doe',
      name: 'John Doe',
      email: 'john@acme.com',
      avatarUrl: 'https://avatars.githubusercontent.com/u/67890'
    }
  });

  // Link user to organization
  await prisma.organizationUser.create({
    data: {
      organizationId: org.id,
      userId: user.id,
      role: 'OWNER'
    }
  });

  // Create sample installation
  const installation = await prisma.installation.create({
    data: {
      githubId: '111',
      organizationId: org.id,
      repositoryCount: 3
    }
  });

  // Create sample repository
  const repo = await prisma.repository.create({
    data: {
      githubId: '222',
      installationId: installation.id,
      name: 'backend-api',
      fullName: 'acme-corp/backend-api',
      private: true,
      defaultBranch: 'main'
    }
  });

  // Create sample merge rule
  await prisma.mergeRule.create({
    data: {
      organizationId: org.id,
      repositoryId: repo.id,
      name: 'Auto-approve documentation',
      description: 'Automatically approve changes to documentation files',
      enabled: true,
      priority: 1,
      conditions: {
        filePatterns: ['*.md', 'docs/**'],
        maxRiskScore: 0.3
      },
      actions: {
        autoApprove: true,
        autoMerge: false,
        notify: true
      }
    }
  });

  // Create sample pull request
  await prisma.pullRequest.create({
    data: {
      githubId: '333',
      repositoryId: repo.id,
      number: 42,
      title: 'Update README with new API documentation',
      body: 'This PR updates the README file with the latest API documentation.',
      state: 'OPEN',
      authorId: user.id,
      baseBranch: 'main',
      headBranch: 'feature/update-docs',
      mergeable: true,
      riskScore: 0.1,
      aiAnalysis: {
        summary: 'Documentation update with low risk',
        concerns: [],
        recommendations: ['Consider adding examples'],
        autoApprovalRecommended: true,
        categories: {
          security: 0.0,
          breaking: 0.0,
          complexity: 0.1,
          testing: 0.0,
          documentation: 1.0
        }
      }
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });