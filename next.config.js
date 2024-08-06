/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "isomorphic-furyroad.s3.amazonaws.com",
      "res.cloudinary.com",
      "thumbs.dreamstime.com",
    ],
  },
};

module.exports = nextConfig;
