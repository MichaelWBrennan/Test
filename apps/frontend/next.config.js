/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: (process.env.BACKEND_URL || 'http://localhost:3001') + '/api/:path*',
      },
    ];
  },
  output: 'standalone',
};

module.exports = nextConfig;