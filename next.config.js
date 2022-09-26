


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};



module.exports = nextConfig;