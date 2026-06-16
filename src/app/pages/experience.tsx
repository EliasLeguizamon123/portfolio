/* eslint-disable tailwindcss/no-contradicting-classname */
import { Layers3 } from "lucide-react";
import TimelineItem from "../components/timelineItem";

export default function Experience () {
    return (
        <section id="experience" data-section="experience">
            <div className="p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
                    <Layers3 className="animate-bounce text-cyan-700" />
                    <p>
                    Experience
                    </p>
                </h2>
                <ol className="relative ml-3 border-s border-gray-200">
                    <TimelineItem
                        title="Tech Lead - Giftitto"
                        date="Mar 2026 - PRESENT"
                        description="Led the development of modern, scalable web and mobile applications as Technical Lead. Drove architectural decisions, mentored developers, and ensured delivery of high-quality fullstack solutions across multiple platforms."
                        link="https://partners.giftitto.com/"
                    />
                    <TimelineItem
                        title="DevOps Engineer - BiometricPro"
                        date="Sep 2025 - PRESENT"
                        description="Architected and managed cloud infrastructure on Azure, orchestrating containerized workloads with Docker and streamlining delivery through robust CI/CD pipelines. Automated Linux server operations through scripting and implemented comprehensive monitoring for distributed systems using Prometheus and Nginx."
                        link="https://biometricpro.io/en/home/"
                    />
                    <TimelineItem
                        title="Freelance Software Engineer - AGI Systems"
                        date="2024 - Sep 2025"
                        description="Designed and built desktop and mobile applications, including a body composition scale interface system (FastAPI, Electron, React, SQLite) and a smart home controller for spa and sauna automation via Bluetooth and Wi-Fi (React Native)."
                        link="http://www.americangreeninc.com/"
                    />
                    <TimelineItem
                        title="Web Developer - Magnetic Cash"
                        date="2022 - 2025"
                        description="Developed and maintained the company's ecosystem of web systems and digital platforms, spanning desktop, mobile, and web applications with a focus on ElectronJS, React, and Angular."
                        link="https://site.magneticash.com/home/"
                    />
                    <TimelineItem
                        title="IT Specialist - COPITEC"
                        date="2019 - 2022"
                        description="Managed IT infrastructure including server administration, hardware maintenance, and website operations. Provided technical support to members, specializing in digital signature certificate generation and renewal (SSL security)."
                        link="https://www.copitec.org.ar"
                    />
                    <TimelineItem
                        title="Web Development Instructor - Freelance"
                        date="2017 - 2019"
                        description="Designed and delivered introductory web development courses covering HTML5, CSS3, and JavaScript, helping aspiring developers break into the tech industry."
                    />
                </ol>
            </div>
        </section>
    )
}