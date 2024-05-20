"use client"
import { Dot, Forward } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { sendQuestion } from "../lib/services";

export interface Message {
    id: string;
    message: string;
    owner: "bot" | "user"
}

export function Chat () {
    const [loading, setLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
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
    ]);

    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messagesEndRef.current && messages.length > 2) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = new FormData(event.currentTarget);
        const userMessage: Message = {
            id: Math.random().toString(36).substring(7),
            message: form.get('question') as string,
            owner: "user"
        };

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    
        setMessages(prevMessages => [...prevMessages, userMessage]);

        setLoading(true);
    
        sendQuestion(userMessage.message).then((response) => {

            const botMessage: Message = {
                id: Math.random().toString(36).substring(7),
                message: response,
                owner: "bot"
            };
            
            setMessages(prevMessages => [...prevMessages, botMessage]);
        }).finally(() => {
            setLoading(false);
        });
    };

    const formatMessage = (message: string) => {
        console.log(message)
        message = message.replace(/\*\*(.*?)\*\*/g, '<strong><em>$1</em></strong>');
      
        message = message.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
      
        return { __html: message };
    };

    return (
        <>
            <article className="grid max-h-[300px] w-full gap-2 overflow-y-auto rounded-lg border border-gray-800 bg-gradient-to-r from-black to-gray-950 p-4">
                {messages.map((message) => (
                    
                    <div 
                        key={message.id} 
                        className={`size-fit max-w-[80%] rounded-xl ${message.owner === 'bot' ? 'bg-gray-800' : 'ml-auto bg-cyan-700'} p-3 text-gray-50`}
                        dangerouslySetInnerHTML={formatMessage(message.message)}
                    />
                ))}
                {loading && (
                    <div className="flex w-full justify-center text-white">
                        <Dot className="animate-bounce text-white" />
                        <Dot className="animate-bounce text-white" />
                        <Dot className="animate-bounce text-white" />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </article>
            <form onSubmit={handleSubmit} className="w-full">
                <div className='relative mt-4 flex'>
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='h-[1px] w-full animate-border-width rounded-full  bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                    </div>
                    <input
                        ref={inputRef}
                        name="question"
                        id="question"
                        className='block h-12 w-[95%] rounded-md rounded-r-none  border border-gray-800 bg-gray-950 px-4 py-2 text-gray-300 focus:outline-none md:px-6'
                    />
                    <button type="submit" className="flex h-12 w-[5%] items-center justify-center rounded-r-md border border-gray-800 bg-gradient-to-r from-black to-gray-950">
                        <Forward className="text-white" />
                    </button>
                </div>
            </form>
        </>
    )
}
