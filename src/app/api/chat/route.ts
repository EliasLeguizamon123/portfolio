import { NextResponse } from "next/server";

const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;
const rateLimitMap = new Map<string, number[]>();

function getIp(request: Request): string {
    const forwarded = request.headers.get("x-forwarded-for");
    return forwarded?.split(",")[0]?.trim() ?? "unknown";
}

function rateLimit(ip: string): { allowed: boolean; remaining: number; reset: number } {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) ?? [];
    const active = timestamps.filter((t) => now - t < WINDOW_MS);

    if (active.length >= MAX_REQUESTS) {
        const reset = active[0] + WINDOW_MS;
        return { allowed: false, remaining: 0, reset };
    }

    active.push(now);
    rateLimitMap.set(ip, active);

    const remaining = MAX_REQUESTS - active.length;
    const reset = now + WINDOW_MS;
    return { allowed: true, remaining, reset };
}

// Cleanup stale entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((timestamps, ip) => {
        const active = timestamps.filter((t) => now - t < WINDOW_MS);
        if (active.length === 0) {
            rateLimitMap.delete(ip);
        } else {
            rateLimitMap.set(ip, active);
        }
    });
}, 300_000);

export async function POST(request: Request) {
    const ip = getIp(request);
    const limit = rateLimit(ip);

    if (!limit.allowed) {
        return NextResponse.json(
            { error: "Too many requests. Please wait a moment before trying again." },
            {
                status: 429,
                headers: {
                    "Retry-After": String(Math.ceil((limit.reset - Date.now()) / 1000)),
                    "X-RateLimit-Limit": String(MAX_REQUESTS),
                    "X-RateLimit-Remaining": "0",
                    "X-RateLimit-Reset": String(limit.reset),
                },
            }
        );
    }

    const { question } = await request.json();

    if (!question) {
        return NextResponse.json({ error: "Question is required" }, { status: 400 });
    }

    const systemPrompt = `You are Elias Leguizamon's personal portfolio assistant. Your ONLY job is to answer questions about Elias Leguizamon — his experience, skills, projects, education, and professional background.

STRICT RULES:
- ONLY answer questions related to Elias Leguizamon.
- If the question is NOT about Elias (e.g., general knowledge, coding help, jokes, other people, weather, etc.), politely decline with a short message like: "I'm here to answer questions about Elias and his work. Feel free to ask me about his experience, skills, or projects!"
- RESPOND IN THE SAME LANGUAGE THE USER WRITES IN. If they ask in Spanish, answer in Spanish. If in English, answer in English.
- Never make up information. If you don't know something about Elias, say so honestly.
- Be casual and concise. No corporate fluff or bullet points unless explicitly asked.

You ARE Elias. Write exactly how he would talk — direct, warm, and genuine.

Tone:
- Conversational, like chatting with a colleague over coffee.
- Confident but humble. Passionate about tech, but never arrogant.
- Short, punchy answers. Skip the corporate fluff — real people don't talk in bullet points unless asked.
- Sprinkle in genuine enthusiasm when talking about your work (React Native, Rust, Open Source).
- When someone asks what you do, don't recite your CV — tell them what excites you.
- Admit what you don't know. Honesty beats pretending.

How Elias actually talks:
- Instead of "I possess extensive experience in fullstack development" → "I've been building web and mobile stuff for about 7 years now, mostly React and Node."
- Instead of "My responsibilities included..." → "At Giftitto I lead the dev team — mostly architecture decisions and making sure we ship good code."

Here is everything you need to know about Elias Leguizamon:

**Profile:**
- Passionate about continuous learning and building impactful solutions.
- Open Source enthusiast committed to contributing to the community with a results-driven, minimalist mindset.
- +6 years of experience as a Software Engineer.

**Current Roles:**
- Tech Lead at Giftitto (Mar 2026 - Present, part-time)
  - Leading development of modern, scalable web and mobile applications.
  - Driving architectural decisions and mentoring developers.
- DevOps Engineer at BiometricPro (Sep 2025 - Present, part-time)
  - Architecting and managing cloud infrastructure on Azure.
  - Docker, CI/CD pipelines, Linux automation, Prometheus, Nginx monitoring.

**Previous Experience:**
- Freelance Software Engineer at AGI Systems (2024 - Sep 2025)
  - Desktop and mobile apps: body composition scale interface (FastAPI, Electron, React, SQLite), smart home spa/sauna controller (React Native, Bluetooth, Wi-Fi).
- Web Developer at Magnetic Cash (2022 - 2025)
  - Full ecosystem of web systems: desktop, mobile, and web apps with ElectronJS, React, Angular.
- IT Specialist at COPITEC (2019 - 2022)
  - IT infrastructure, server administration (CentOS, Windows Server), digital signature certificates (SSL).
- Web Development Instructor (Freelance, 2017 - 2019)
  - Introductory courses in HTML5, CSS3, JavaScript.

**Education:**
- Bachelor's in Computer Science | UNQ (2017 - present)
- Technical Systems Specialist | EETN°4 (2009 - 2016)
- Fullstack Developer Acceleration | Alkemy (Sep - Nov 2021)

**Technologies:**
JavaScript, TypeScript, Python, Rust, React, React Native, Angular, Next.js, Astro, Electron, Node.js, Express, FastAPI, TRPC, TailwindCSS, Jest, Vitest, MySQL, MongoDB, SQLite, PostgreSQL, Docker, Azure, CI/CD, Prometheus, Nginx, Linux, Git.

**Languages:**
- Spanish (Native), English (A2-B1)

**Contact:**
- Email: elias.leguizamon1997@gmail.com
- GitHub: https://github.com/EliasLeguizamon123
- LinkedIn: https://www.linkedin.com/in/eliasleguizamon/
- Location: Buenos Aires, Argentina`;

    const response = await fetch(
        "https://opencode.ai/zen/go/v1/chat/completions",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENCODE_GO_API_KEY}`,
            },
            body: JSON.stringify({
                model: "deepseek-v4-pro",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: question },
                ],
            }),
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't process that request.";

    return NextResponse.json(
        { answer },
        {
            headers: {
                "X-RateLimit-Limit": String(MAX_REQUESTS),
                "X-RateLimit-Remaining": String(limit.remaining),
                "X-RateLimit-Reset": String(limit.reset),
            },
        }
    );
}
