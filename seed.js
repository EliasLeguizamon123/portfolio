// const projects  = require("@/app/lib/placeholderdata");
const { db } = require('@vercel/postgres');

const url = process.env.POSTGRES_URL

async function seedProjects(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS projects (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                image TEXT NOT NULL,
                link TEXT NOT NULL,
                tags TEXT[] NOT NULL
            );
        `;
        console.log('Table created successfully!');
        
        return {
            createTable,
        }
        

    } catch (error) {
        console.error('Error seeding projects: ', error)
        throw error;
    }
}

async function main(){
    const client = db.connect();
    await seedProjects(client);
}
console.log({
    url,
    url_no_pooling: process.env.POSTGRES_URL_NON_POOLING
})
main().catch((error) => {
    console.error(error);
})