/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navbar';

export default function HomeSection () {
    const [start, setStart] = useState(Date.now());
    let camera: any, controls: any, scene: any, renderer: any, effect: any;
    let sphere: any, plane: any;
    const animationRef = useRef<HTMLDivElement>(null)
  
    const render = () => {
        const timer = Date.now() - start;

        setStart(Date.now());

        if (window.innerWidth < 1024) {
            // Para pantallas más pequeñas, centrar la esfera a una altura más baja
            sphere.position.y = -100 + Math.abs(Math.sin(timer * 0.002)) * 150;
        } else {
            // Para pantallas más grandes, mantener el comportamiento original
            sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
        }
        sphere.rotation.x = timer * 0.0004;
        sphere.rotation.z = timer * 0.0002;


        controls.update();

        effect.render( scene, camera );

    }

    const animate = () => {
        requestAnimationFrame( animate );
        render();
    }

    const init = () => {
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 500;

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0, 0, 0 );

        const pointLight1 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
        pointLight1.position.set( 400, 400, 600 );
        scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
        pointLight2.position.set( 100, - 100, - 100 );
        scene.add( pointLight2 );

        sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
        sphere.position.x = 200;
        scene.add( sphere );

        // Plane
        plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
        plane.position.y = - 200;
        plane.rotation.x = - Math.PI / 1.8;
        plane.position.x = 250;
        scene.add( plane );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        effect = new AsciiEffect( renderer, ' .:-+*=%@', { invert: true } );
        effect.setSize( window.innerWidth, window.innerHeight );
        // effect.domElement.style.color = 'white';
        // effect.domElement.style.background = 'black'; //can be linear-gradient
        // effect.domElement.style.opacity = '0.5';
        // document.body.appendChild( effect.domElement );
        animationRef.current?.appendChild(effect.domElement);

        controls = new TrackballControls( camera, effect.domElement );

        controls.noZoom = true;
        controls.noRotate = true;
        controls.rotateSpeed = 2.0;

        
    }

    const handleResize = () => {
        if (sphere && plane && camera && controls && scene && renderer && effect){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            effect.setSize( window.innerWidth, window.innerHeight );
            if (window.innerWidth <= 1024){
                sphere.position.x = 0;
                plane.position.x = -10;

                sphere.scale.set(0.5, 0.5, 0.5);
                plane.scale.set(0.5, 0.5, 0.5);

            } else {
                sphere.position.x = 200;
                plane.position.x = 250;

                sphere.scale.set(1, 1, 1);
                plane.scale.set(1, 1, 1);
            }
        }
    }
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (sphere && plane && camera && controls && scene && renderer && effect){
                animate();
            }

            
        }, 100);

        return () => {
            clearInterval(intervalId);
        }
    }, [start]);

    useEffect(() => {
        init();
        handleResize();
        window.addEventListener( 'resize', handleResize, false );

        return () => {
            window.removeEventListener( 'resize', handleResize, false );
        }
    }, [])
    return (
        <section id="home" data-section="home">
            <div className="relative h-screen w-screen bg-slate-950 text-lavender opacity-70" id="animation" ref={animationRef}>
                <div className="absolute inset-0 w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                    <Navbar />
                </div>
            </div>
            <div className=' bg-gunmetal text-lavender opacity-50' />
            <div className="pl-4sm:text-left absolute bottom-[40%] left-0  flex flex-col space-y-4 text-center md:bottom-[45%] md:left-[8%] md:text-left lg:left-[15%] lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">Elías Leguizamón</h1>
                <h2 className="pt-4 text-2xl font-medium text-gray-400 sm:p-0 lg:pl-3">A Fullstack Developer from 🇦🇷</h2>
                <div className="flex justify-self-stretch sm:w-full sm:p-4 md:w-[70%] lg:w-[40%] lg:pl-3">
                    <p className="text-lg text-lavender">
                            Passionate about constantly creating and learning new things, Open Source enthusiast, and
                            committed to contribute to the community with a minimalist mindset.
                    </p>
                </div>
            </div>
        </section>
    )
}