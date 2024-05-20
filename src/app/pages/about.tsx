/* eslint-disable tailwindcss/no-custom-classname */
import { User } from "lucide-react";
import { Chat } from "../components/chat";

export default function About () {
    return (
        <section id="about" data-section="about">
            <div className="p-4 sm:px-4 md:px-32 lg:px-44">
                <h2 className="mb-6 flex items-center gap-x-3 pt-12 text-3xl font-semibold text-black/80 dark:text-white">
                    <User className="animate-bounce text-cyan-700" />
                    <p>
                        About
                    </p>
                </h2>
                <Chat />
            </div>
        </section>
    )
}