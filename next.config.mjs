/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/hero.png" },
      {
        pathname: "/RED%20CRIESCENT%20CERTIFICATE.jpeg",
        search: "?v=2",
      },
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
