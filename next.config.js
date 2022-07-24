/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['id'],
    defaultLocale: 'id',
  },
  images: {
    disableStaticImages: true,
    domains: ['i.annihil.us', 'gateway.marvel.com'],
  },
};

module.exports = nextConfig;
