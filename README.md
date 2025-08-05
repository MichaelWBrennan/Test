# AutoMerge Pro

🚀 **AI-Powered GitHub Marketplace App for Automated Pull Request Reviews and Merging**

AutoMerge Pro intelligently automates your GitHub pull request workflow using advanced AI risk scoring and customizable rules. Save hours of manual review time while maintaining code quality and security.

[![GitHub Marketplace](https://img.shields.io/badge/GitHub%20Marketplace-AutoMerge%20Pro-blue)](https://github.com/marketplace/automerge-pro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI/CD](https://github.com/MichaelWBrennan/Test/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/MichaelWBrennan/Test/actions)

## ✨ Features

### 🤖 AI-Powered Risk Analysis
- **GPT-4 Integration**: Advanced code analysis using OpenAI's latest models
- **Security Detection**: Identifies potential vulnerabilities and security risks
- **Breaking Change Analysis**: Detects API changes and compatibility issues
- **Code Quality Assessment**: Evaluates complexity, maintainability, and best practices

### ⚙️ Intelligent Automation Rules
- **File Pattern Matching**: Auto-approve changes to documentation, tests, or specific directories
- **Author-Based Rules**: Trust certain team members for automatic approvals
- **Branch Protection**: Different rules for main, develop, and feature branches
- **Risk Score Thresholds**: Customize automation based on AI-calculated risk levels

### 📊 Comprehensive Dashboard
- **Real-time Analytics**: Track merge times, risk scores, and team productivity
- **Rule Management**: Easy-to-use interface for creating and managing automation rules
- **Pull Request Insights**: Detailed analysis and recommendations for each PR
- **Team Collaboration**: Shared configurations and organizational settings

### 🔔 Smart Notifications
- **Slack Integration**: Real-time notifications for high-risk PRs and automation events
- **Email Alerts**: Configurable email notifications for critical changes
- **Custom Webhooks**: Integrate with your existing tooling and workflows

## 🚀 Quick Start

### 1. Install the GitHub App

[![Add to GitHub](https://img.shields.io/badge/Add%20to%20GitHub-AutoMerge%20Pro-brightgreen)](https://github.com/apps/automerge-pro)

Click the button above or visit our [GitHub Marketplace listing](https://github.com/marketplace/automerge-pro) to install AutoMerge Pro on your repositories.

### 2. Configure Your Rules

1. Visit the [AutoMerge Pro Dashboard](https://automerge-pro.com/dashboard)
2. Select your organization and repositories
3. Create your first automation rule:
   ```yaml
   # Example: Auto-approve documentation updates
   name: "Documentation Updates"
   conditions:
     filePatterns: ["*.md", "docs/**"]
     maxRiskScore: 0.2
   actions:
     autoApprove: true
     autoMerge: true
   ```

### 3. Watch the Magic Happen

AutoMerge Pro will now automatically:
- ✅ Analyze every pull request with AI
- ⚡ Apply your custom rules
- 🔄 Auto-approve and merge safe changes
- 📱 Notify you about risky PRs

## 📋 Pricing

| Plan | Price | Repositories | Features |
|------|-------|--------------|----------|
| **Free** | $0/month | 3 repos | Basic AI analysis, Standard rules |
| **Team** | $99/month | 10 repos | Advanced AI, Slack notifications, Analytics |
| **Growth** | $299/month | Unlimited | Premium AI models, Custom integrations |
| **Enterprise** | $999/month | Unlimited | SSO, SLA, On-premise options |

[View detailed pricing →](https://automerge-pro.com/pricing)

## 🏗️ Architecture

AutoMerge Pro is built with a modern, scalable architecture:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js App  │    │  Node.js API    │    │   PostgreSQL    │
│  (Frontend)     │◄──►│   (Backend)     │◄──►│   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                               │
                       ┌───────▼───────┐
                       │ Redis + BullMQ │
                       │ Queue System   │
                       └───────┬───────┘
                               │
                    ┌──────────▼──────────┐
                    │    GitHub API       │
                    │  + OpenAI GPT-4     │
                    └─────────────────────┘
```

### Tech Stack

**Frontend:**
- ⚛️ Next.js 14 with App Router
- 🎨 Tailwind CSS + Radix UI
- 📊 Real-time dashboards with SWR

**Backend:**
- 🚀 Fastify.js for high-performance APIs
- 🗄️ PostgreSQL with Prisma ORM
- 🔄 Redis + BullMQ for job processing
- 🤖 OpenAI GPT-4 integration

**Infrastructure:**
- 🌐 Vercel (Frontend deployment)
- ☁️ Render (Backend deployment)
- 🔄 GitHub Actions (CI/CD)
- 📈 Comprehensive monitoring and logging

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ and npm 9+
- PostgreSQL 13+
- Redis 6+
- GitHub App credentials
- OpenAI API key

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MichaelWBrennan/Test.git
   cd Test
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Backend
   cp apps/backend/.env.example apps/backend/.env
   
   # Frontend
   cp apps/frontend/.env.example apps/frontend/.env
   ```

4. **Start the database:**
   ```bash
   # Using Docker (recommended)
   docker-compose up -d postgres redis
   
   # Or install locally
   brew install postgresql redis
   brew services start postgresql redis
   ```

5. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

6. **Start the development servers:**
   ```bash
   # All services
   npm run dev
   
   # Or individually
   npm run dev --workspace=apps/backend
   npm run dev --workspace=apps/frontend
   npm run dev --workspace=marketing-site
   ```

7. **Visit the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Marketing Site: http://localhost:3002

### Project Structure

```
automerge-pro/
├── apps/
│   ├── backend/          # Fastify API server
│   │   ├── src/
│   │   │   ├── routes/   # API routes
│   │   │   ├── services/ # Business logic
│   │   │   └── utils/    # Utilities
│   │   └── prisma/       # Database schema
│   ├── frontend/         # Next.js dashboard
│   │   ├── src/app/      # App router pages
│   │   └── components/   # React components
│   └── marketing-site/   # Marketing website
├── packages/
│   └── shared/           # Shared types and utilities
├── docs/                 # Documentation
└── .github/workflows/    # CI/CD pipelines
```

## 🔧 Configuration

### GitHub App Setup

1. Create a new GitHub App in your organization settings
2. Configure webhook URL: `https://your-domain.com/api/webhooks/github`
3. Set required permissions:
   - Pull requests: Read & Write
   - Contents: Read
   - Metadata: Read
   - Repository webhooks: Write

### Automation Rules

Create sophisticated rules using our flexible JSON schema:

```json
{
  "name": "Auto-approve trusted authors",
  "conditions": {
    "authorPatterns": ["dependabot[bot]", "@core-team/*"],
    "filePatterns": ["package*.json", "*.lock"],
    "maxRiskScore": 0.3
  },
  "actions": {
    "autoApprove": true,
    "autoMerge": false,
    "requireReviews": 1,
    "notify": true
  }
}
```

### AI Risk Scoring

Our AI analyzes multiple factors:
- 🔒 **Security**: Vulnerabilities, auth changes, sensitive data
- 💥 **Breaking Changes**: API modifications, dependency updates
- 🧩 **Complexity**: Code complexity, file changes, test coverage
- 📋 **Quality**: Code style, documentation, best practices

## 📖 API Reference

### Webhook Events

AutoMerge Pro listens for these GitHub webhook events:

- `pull_request` - PR opened, updated, closed
- `pull_request_review` - PR reviewed, approved
- `check_suite` - CI/CD status updates
- `installation` - App installed/uninstalled

### REST API Endpoints

```bash
# Get organization rules
GET /api/rules/org/:orgId

# Create new rule
POST /api/rules/org/:orgId

# Get pull request analysis
GET /api/github/repositories/:repoId/pull-requests/:prNumber

# Update notification settings
POST /api/notifications/org/:orgId
```

## 🔒 Security

AutoMerge Pro takes security seriously:

- 🔐 **Secure Authentication**: JWT tokens with secure HTTP-only cookies
- 🛡️ **CSRF Protection**: Built-in CSRF token validation
- ⚡ **Rate Limiting**: API rate limiting to prevent abuse
- 🔑 **Minimal Permissions**: Request only necessary GitHub permissions
- 🔒 **Data Encryption**: All data encrypted in transit and at rest

## 📚 Documentation

- [📖 User Guide](docs/user-guide.md)
- [🔧 API Reference](docs/api-reference.md)
- [🚀 Deployment Guide](docs/deployment.md)
- [🤝 Contributing Guide](docs/contributing.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Email**: support@automerge-pro.com
- 💬 **Discord**: [Join our community](https://discord.gg/automerge-pro)
- 🐛 **Issues**: [GitHub Issues](https://github.com/MichaelWBrennan/Test/issues)
- 📖 **Docs**: [Documentation](https://docs.automerge-pro.com)

---

<div align="center">
  <p>
    <strong>Built with ❤️ by the AutoMerge Pro team</strong>
  </p>
  <p>
    <a href="https://automerge-pro.com">Website</a> •
    <a href="https://github.com/marketplace/automerge-pro">GitHub Marketplace</a> •
    <a href="https://docs.automerge-pro.com">Documentation</a> •
    <a href="https://status.automerge-pro.com">Status</a>
  </p>
</div>