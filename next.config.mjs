/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    GROQ_API_URL: process.env.GROQ_API_URL,
  },
};

export default nextConfig;
