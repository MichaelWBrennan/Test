# Contributing to AutoMerge Pro

Thank you for your interest in contributing to AutoMerge Pro! This guide will help you get started.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/Test.git
   cd Test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp apps/backend/.env.example apps/backend/.env
   cp apps/frontend/.env.example apps/frontend/.env
   ```

4. **Start the development environment**
   ```bash
   # Start database services
   docker-compose up -d postgres redis
   
   # Run database migrations
   npm run db:migrate
   
   # Start all services
   npm run dev
   ```

## Project Structure

- `apps/backend/` - Fastify API server
- `apps/frontend/` - Next.js dashboard
- `marketing-site/` - Marketing website
- `packages/shared/` - Shared utilities and types

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Commit your changes: `git commit -m "feat: add new feature"`
6. Push to your fork: `git push origin feature/your-feature`
7. Create a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow existing code formatting (Prettier)
- Write tests for new functionality
- Keep functions small and focused
- Use meaningful variable names

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Submitting Changes

1. Ensure all tests pass
2. Update documentation if needed
3. Add changelog entry if applicable
4. Create a detailed Pull Request description

## Getting Help

- Create an issue for bugs or feature requests
- Join our Discord for questions
- Check existing issues and PRs first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.