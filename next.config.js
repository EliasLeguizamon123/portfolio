/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            }
        ],
        domains: ['raw.githubusercontent.com']
    },
};

module.exports = nextConfig;
