import { sql } from '@vercel/postgres';
import { Project } from './projectModel';

export async function createTable() {
    try {
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
                ARRAY[${project.tags.map(tag => "'" + tag + "'").join(', ')}]::TEXT[]
            );`
        return {createNewProject}

    } catch (e: any) {
        console.error(e.message);
        throw Error(e.message)
    }
}

export default async function getProjects() {
    try {
        const projects = await sql`
        SELECT * FROM projects;`

        return projects.rows
    } catch (error: any) {
        console.error(error.message);
        
        throw Error(error.message)
    }
}

export async function getUserContributions(username: string) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);

        

        const contributedEvents = response.json().then((data) => {
            // Filtrar los eventos para obtener solo los eventos de tipo 'PullRequestEvent'
            const pullRequestEvents = data.filter((event: any) => event.type === 'PullRequestEvent');

            // Mapear cada evento para obtener solo la información de 'repo'
            let repoInfo = pullRequestEvents.map((event: any) => event.repo);

            // Eliminar los repos duplicados por id
            repoInfo = repoInfo.filter((repo: any, index: number) => {
                const _repo = repoInfo.findIndex((r: any) => r.id === repo.id);
                return _repo === index;
            });
            
            return repoInfo;
        });

        return contributedEvents;
    } catch (error) {
        return error;
    }
}