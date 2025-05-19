/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'complete-addition-236de36f0b.media.strapiapp.com',
      'trusty-nature-dfe65baab6.media.strapiapp.com',
      'smart-feast-4ad402f782.media.strapiapp.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
