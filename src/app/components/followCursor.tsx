'use client';

import React, { useEffect } from 'react';

interface FollowCursorProps {
  color?: string;
  radius?: number; // Tamaño del círculo
  lag?: number; // Velocidad de seguimiento
}

const FollowCursor: React.FC<FollowCursorProps> = ({
    color = '#323232a6',
    radius = 10,
    lag = 10,
}) => {
    
    useEffect(() => {
        // Ocultar el cursor al cargar el componente
        document.body.style.cursor = 'none';

        // Limpiar al desmontar el componente
        return () => {
            document.body.style.cursor = '';  // Restablecer el cursor predeterminado
        };
    }, []);

    useEffect(() => {
        let canvas: HTMLCanvasElement;
        let context: CanvasRenderingContext2D | null;
        let animationFrame: number;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cursor = { x: width / 2, y: height / 2 };
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        class Dot {
            position: { x: number; y: number };
            width: number;
            lag: number;

            constructor(x: number, y: number, width: number, lag: number) {
                this.position = { x, y };
                this.width = width;
                this.lag = lag;
            }

            moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
                context.filter = 'blur(2px)';
                context.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.8)`;

                this.position.x += (x - this.position.x) / this.lag;
                this.position.y += (y - this.position.y) / this.lag;
                context.beginPath();
                context.arc(
                    this.position.x,
                    this.position.y,
                    this.width,
                    0,
                    2 * Math.PI
                );
                context.fill();
                context.closePath();
            }
        }

        const dot = new Dot(width / 2, height / 2, radius, lag);

        const onMouseMove = (e: MouseEvent) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        };

        const onWindowResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            if (canvas) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const updateDot = () => {
            if (context) {
                context.clearRect(0, 0, width, height);
                dot.moveTowards(cursor.x, cursor.y, context);
            }
        };

        const loop = () => {
            updateDot();
            animationFrame = requestAnimationFrame(loop);
        };

        const init = () => {
            if (prefersReducedMotion.matches) {
                return;
            }

            canvas = document.createElement('canvas');
            context = canvas.getContext('2d');
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.pointerEvents = 'none';
            canvas.width = width;
            canvas.height = height;
            canvas.style.zIndex = '99999999';
            document.body.appendChild(canvas);

            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('resize', onWindowResize);
            loop();
        };

        const destroy = () => {
            if (canvas) canvas.remove();
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);
        };

        prefersReducedMotion.onchange = () => {
            if (prefersReducedMotion.matches) {
                destroy();
            } else {
                init();
            }
        };

        init();

        return () => {
            destroy();
        };
    }, [color, radius, lag]);

    return null;
};

export default FollowCursor;
