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
                hostname: 'via.placeholder.com',
            }
        ]
    },
    env: {
        POSTGRES_DATABASE: "verceldb",
        POSTGRES_HOST: "ep-steep-art-a4m70ufk-pooler.us-east-1.postgres.vercel-storage.com",
        POSTGRES_PASSWORD: "9yaedcBiZG6E",
        POSTGRES_PRISMA_URL: "postgres://default:9yaedcBiZG6E@ep-steep-art-a4m70ufk-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15",
        POSTGRES_URL: "postgres://default:9yaedcBiZG6E@ep-steep-art-a4m70ufk-pooler.us-east-1.postgres.vercel-storage.com/verceldb",
        POSTGRES_URL_NON_POOLING: "postgres://default:9yaedcBiZG6E@ep-steep-art-a4m70ufk.us-east-1.postgres.vercel-storage.com/verceldb",
        POSTGRES_USER: "default"
    }
};

module.exports = nextConfig;
