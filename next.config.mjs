/** @type {import('next').NextConfig} */
import 'dotenv/config'

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
    },
    env: {
        API_URL: process.env.API_URL,
    },
};

export default nextConfig;
