/* eslint-disable tailwindcss/no-contradicting-classname */
import TimelineItem from "../components/timelineItem";

export default function Experience () {
    return (
        <section id="experience" data-section="experience">
            <div className=" mx-auto h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pl-4 opacity-70">
                <ol className="relative ml-3 border-s border-gray-200">
                    <TimelineItem
                        title="Web Developer"
                        date="2020 - Present"
                        description="I am currently working as a Web Developer at the University of Ottawa. I am responsible for developing and maintaining the University's websites and web applications."
                        link="https://uottawa.ca"
                    />
                    <TimelineItem
                        title="Web Developer"
                        date="2020 - Present"
                        description="I am currently working as a Web Developer at the University of Ottawa. I am responsible for developing and maintaining the University's websites and web applications."
                        link="https://uottawa.ca"
                    />
                    <TimelineItem
                        title="Web Developer"
                        date="2020 - Present"
                        description="I am currently working as a Web Developer at the University of Ottawa. I am responsible for developing and maintaining the University's websites and web applications."
                        link="https://uottawa.ca"
                    />
                    <TimelineItem
                        title="Web Developer"
                        date="2020 - Present"
                        description="I am currently working as a Web Developer at the University of Ottawa. I am responsible for developing and maintaining the University's websites and web applications."
                        link="https://uottawa.ca"
                    />
                </ol>
            </div>
        </section>
    )
}