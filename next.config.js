/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/6mygAnq',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
