/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'complete-addition-236de36f0b.media.strapiapp.com', 'ingenious-darling-581ecdbd0d.media.strapiapp.com'],
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
