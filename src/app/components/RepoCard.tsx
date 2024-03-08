'use client';
import React, { useRef, useState } from 'react';
import { Repository } from '../lib/repoModel';

const CardSpotlight = ({ repo }: { repo: Repository }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onClick={() => window.open(`https://github.com/${repo.name}`, '_blank')}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative flex h-48 w-72 cursor-pointer justify-center overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950 shadow-2xl hocus:-translate-y-2.5 hocus:scale-105 hocus:border-cyan-200'
        >
            <div
                className='pointer-events-none absolute -inset-px opacity-0 transition duration-300 hocus:-translate-y-2.5 hocus:scale-105'
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
            />
            <div className='size-full flex-col gap-4 pt-2 text-center'>
                <p className='pb-12 text-xl italic text-gray-200'>{repo.name.split('/')[1]}</p>
                <p className='text-gray-200'>{repo.name.split('/')[0]}</p>
            </div>
        </div>
    );
};

export default CardSpotlight;
