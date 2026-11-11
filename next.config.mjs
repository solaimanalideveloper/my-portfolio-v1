/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/hero.png" },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
