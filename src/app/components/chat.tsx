"use client"
import { Forward } from "lucide-react";
// import { useState } from "react";

export interface Message {
    id: string;
    message: string;
    owner: "bot" | "user"
}

export function Chat () {
    // const [messages, setMessages] = useState<Message[]>(
    const messages: Message[] =[
        {
            id: Math.random().toString(36).substring(7),
            message: "Hello there!",
            owner: "bot"
        },
        {
            id: Math.random().toString(36).substring(7),
            message: "Ask me anything about Elias",
            owner: "bot"
        },
        {
            id: Math.random().toString(36).substring(7),
            message: "I am a bot",
            owner: "user"
        },
    ];
    return (
        <>
            <article className="grid max-h-[300px] w-full gap-2 overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-r from-black to-gray-950 p-4">
                {messages.map((message) => (
                    <div key={message.id} className={`size-fit max-w-[80%] rounded-xl ${message.owner === 'bot' ? 'bg-gray-800' : 'ml-auto bg-cyan-700'} p-3 text-gray-50`}>
                        <p>{message.message}</p>
                    </div>
                ))}
            
            </article>
            <div className='relative mt-4 flex'>
                <div className='absolute top-0 flex w-full justify-center'>
                    <div className='h-[1px] w-full animate-border-width rounded-full  bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                </div>
                <input
                    className='block h-12 w-[95%] rounded-md  rounded-r-none border border-gray-800 bg-gray-950 px-3 py-2 text-gray-300 focus:outline-none'
                    placeholder='Ask me ...'
                />
                <button className="flex h-12 w-[5%] items-center justify-center rounded-r-md border border-gray-800 bg-gradient-to-r from-black to-gray-950">
                    <Forward className="text-white" />
                </button>
            </div>
        </>
    )
}