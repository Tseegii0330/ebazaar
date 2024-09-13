/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: "/_next/image",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pics.ebazaar.link",
      },
      {
        protocol: "https",
        hostname: "m.ebazaar.mn",
      },
    ],
  },
};

export default nextConfig;
