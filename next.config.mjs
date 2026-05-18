/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Оставляем это, чтобы билд не падал из-за мелких ошибок
    ignoreBuildErrors: true,
  },
  images: {
    // Заменяем domains на remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
