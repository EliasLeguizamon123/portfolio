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
                        title="Web Developer - Magnetic Cash"
                        date="2022 - PRESENT"
                        description="My main tasks were to create and maintain the different systems and web pages of the company."
                        link="https://site.magneticash.com/home/"
                    />
                    <TimelineItem
                        title="IT specialist - COPITEC"
                        date="2019 - 2022"
                        description="My main tasks in this position are based on doing maintenance work on the equipment, servers, website, etc. In turn, provide technical support to COPITEC enrollees to generate and renew digital signature records (SSL Security)."
                        link="https://www.copitec.org.ar"
                    />
                    <TimelineItem
                        title="Web Development Instructor - Freelance"
                        date="2017 - 2019"
                        description="My main task is to introduce curious people to the best valued sector of the programming market today, the classes can be defined as an introduction to HTML5, CSS3 and Javascript."
                    />
                </ol>
            </div>
        </section>
    )
}