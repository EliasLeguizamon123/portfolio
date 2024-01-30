import { sql } from '@vercel/postgres';
import { Project } from './projectModel';

export async function createTable() {
    try {
        console.log({url: process.env})
        const createTable = await sql`
        CREATE TABLE IF NOT EXISTS projects (
            id UUID PRIMARY KEY,
            title VARCHAR(255),
            description VARCHAR(255),
            image VARCHAR(255),
            link VARCHAR(255),
            tags TEXT[]
            );` 
        return {createTable}
    } catch (e: any) {
        console.error(e.message);
        
        throw Error(e.message)
    }
}

export async function createNewProject(project: Project) {
    try{
        const tagsAsString = project.tags.join(',');
        
        const createNewProject = await sql`
        INSERT INTO projects (
            id,
            title,
            description,
            image,
            link,
            tags
            ) VALUES (
                gen_random_uuid (),
                ${project.title},
                ${project.description},
                ${project.image},
                ${project.link},
                ARRAY[${tagsAsString}]
            );`
        return {createNewProject}

    } catch (e: any) {
        console.error(e.message);
        
        throw Error(e.message)
    }
}