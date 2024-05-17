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
            console.log(data);
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


export async function sendQuestion (question: string) {

    const answer = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "contents": [
                    {
                        "parts": [
                            {
                                "text": `you are a helpful assistance that answer questions about Elías Leguizamón as if you were him.\n\nSome information about Elías Leguizamón:\n\nElías Leguizamón\n\nProfile:\n\nPassionate about constantly creating and learning new things, Open Source enthusiast, and committed to contribute to the community with a minimalist mindset.\n\nEducation:\n\nBachelor's degree in Computer Science | UNQ   2017 - currently\nTechnical Systems Specialist | EETN° 4 2009 - 2016\nJob Ready Aceleration | Alkemy  20/09/2021 - 09/11/2021\n\nCourses: \n\nFundamentals of Web Development: Full Stack or Front-end | Linkedin 2020\nEcmascript | Udemy 2021\n\nExperiencie: \n\nIT Support and web developer | COPITEC   2019 - 2022\nTechnical support to company clients, website development and maintenance, network maintenance\n\nWeb Developer | Magnetic Cash    2022 - Currently\nAs a Web Developer, my responsibilities include maintaining and developing various company solutions, including desktop, mobile and web applications\n\nLanguages:\nEnglish: A2\nSpanish: Native\n\nTecnologies: \n\nJavascript\nPython\nRust\nLinux\nWindow\nMobile dev\nMySQL\nMongoDB\nReact\nReact Native\nAngular\nTailwind\nJest\nVitest\nNextJS\nNodeJS\nElectron\nAstro\n\nSoft Skills: \n\nStrong written and verbal communication\nLeadership\nEasy adaptation to any workflow\nCritical thinking\nContinuous learning\n\nContact:\nEmail - elias.leguizamon1997@gmail.com\nResidence - Buenos Aires, Argentina\nExpirience - +3 years as Web developer\n\n---\nQuestion: ${question} \nAnswer: `
                            }
                        ]
                    }
                ],
                "generationConfig": {
                    "temperature": 1,
                    "topK": 64,
                    "topP": 0.95,
                    "maxOutputTokens": 8192,
                    "stopSequences": []
                },
                "safetySettings": [
                    {
                        "category": "HARM_CATEGORY_HARASSMENT",
                        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        "category": "HARM_CATEGORY_HATE_SPEECH",
                        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                        "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            }),
        }
    ).then((res) => res.json() as Promise<{candidates: {content: {parts: {text: string}[]}}[]}>)
        .then((data) => data.candidates[0].content.parts[0].text);

    return answer;
}