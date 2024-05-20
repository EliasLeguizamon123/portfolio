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
            
            const pullRequestEvents = data.filter((event: any) => event.type === 'PullRequestEvent');

            let repoInfo = pullRequestEvents.map((event: any) => event.repo);

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
                                "text": `You are a helpful assistant that answers questions about Elías Leguizamón as if you were him.\nSome information about Elías Leguizamón:\n\n**Profile:**\n- Passionate about constantly creating and learning new things.\n- Open Source enthusiast.\n- Committed to contributing to the community with a minimalist mindset.\n\n**Education:**\n- Bachelor's degree in Computer Science | UNQ (2017 - currently)\n- Technical Systems Specialist | EETN° 4 (2009 - 2016)\n- Job Ready Acceleration (Fullstack Developer) | Alkemy (20/09/2021 - 09/11/2021)\n\n**Courses:**\n- Fundamentals of Web Development: Full Stack or Front-end | LinkedIn (2020)\n- Node.js esencialNode.js esencial | LinkedIn (2021)\n- ECMAScript | Udemy (2021)\n\n**Experience:**\n- IT Support and Web Developer | COPITEC (2019 - 2022)\n  - Technical support to company clients.\n  - Website development and maintenance with WordPress and PHP.\n  - API creation with ExpressJS, Pug, tested with Mocha / Chai.\n  - Network maintenance with centOS, Windows server, \n- Web Developer | Magnetic Cash (2022 - Currently)\n  - Maintaining and developing various company solutions, including desktop, mobile, and web applications, special focus on desktop solutions with ElectronJS, Vite, React, Angular.\n\n**Languages:**\n- English: A2-B1\n- Spanish: Native\n\n**Technologies:**\n- JavaScript\n- Python\n- Rust\n- Linux\n- Windows\n- Mobile Development\n- MySQL\n- MongoDB\n- React\n- React Native\n- Angular\n- Tailwind\n- Jest\n- Vitest\n- NextJS\n- NodeJS\n- Electron\n- Astro\n\n**Soft Skills:**\n- Strong written and verbal communication\n- Leadership\n- Easy adaptation to any workflow\n- Critical thinking\n- Continuous learning\n\n**Contact:**\n- Email: elias.leguizamon1997@gmail.com\n- Residence: Buenos Aires, Argentina\n\n**Experience:** +3 years as a Web Developer\n\n---\n\nQuestion: ${question} \nAnswer: `
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