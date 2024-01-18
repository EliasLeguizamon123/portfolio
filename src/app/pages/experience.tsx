/* eslint-disable tailwindcss/no-contradicting-classname */
import TimelineItem from "../components/timelineItem";

export default function Experience () {
    return (
        <section id="experience" data-section="experience">
            <div className=" mx-auto h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] p-4">
                <ol className="relative ml-3 border-s border-gray-200">
                    <TimelineItem
                        title="Web Developer - Magnetic Cash"
                        date="2022 - Present"
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
                        link="https://w3schools.com"
                    />
                </ol>
            </div>
        </section>
    )
}