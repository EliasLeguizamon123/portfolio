/* eslint-disable tailwindcss/no-contradicting-classname */
import ContactForm from "../components/contactForm";

export default function Contact() {
    return (
        <section id="contact" data-section="contact">
            <div className="w-full bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] text-lavender">
                <div className="flex w-full justify-center p-4">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}