'use client'
import React from "react";

export default function ContactForm() {
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await fetch("/app/api/send/submit", { // Cambia la ruta a /api/submit
                method: 'POST',
                body: JSON.stringify({
                    email: (document.getElementById("email") as HTMLInputElement).value,
                    subject: (document.getElementById("subject") as HTMLInputElement).value,
                    message: (document.getElementById("message") as HTMLInputElement).value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.log(response)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-gray-800 shadow md:max-w-xl md:flex-row dark:mb-4 dark:border-gray-700">
            <div className="mx-auto w-full max-w-screen-md px-4 py-8 lg:py-16">
                <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Reach me</h2>
                <form className="space-y-8" onSubmit={onSubmit}>
                    <div>
                        <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-gray-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Send message</button>
                </form>
            </div>
        </div>
    )
}