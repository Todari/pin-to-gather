/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: `/naver-api/:path*`,
        destination: "https://openapi.naver.com/:path*",
      },
    ];
  },
};

export default nextConfig;
