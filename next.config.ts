import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "*",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
//   experimental: {
//     serverActions: {
//       bodySizeLimit: "50mb",
//     },
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "http://localhost:3000/api/:path*", // Proxy to backend
//       },
//     ];
//   },
// };

// export default nextConfig;