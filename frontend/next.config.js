/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.motoproworks.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.jdmagicbox.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgd.aeplcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.royalenfield.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
