'use client';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { useEffect, useState } from 'react';

export default function Home() {
    const [start, setStart] = useState(Date.now());
    let camera: any, controls: any, scene: any, renderer: any, effect: any;
    let sphere: any, plane: any;
  
    const render = () => {
        const timer = Date.now() - start;

        setStart(Date.now());

        sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
        sphere.rotation.x = timer * 0.0003;
        sphere.rotation.z = timer * 0.0002;

        controls.update();

        effect.render( scene, camera );

    }

    const animate = () => {
        requestAnimationFrame( animate );
        render();
    }

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
        effect.setSize( window.innerWidth, window.innerHeight );
    }

    const init = () => {
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 500;

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0, 0, 0 );

        const pointLight1 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
        pointLight1.position.set( 200, 200, 200 );
        scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
        pointLight2.position.set( - 100, - 100, - 100 );
        scene.add( pointLight2 );

        sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: false } ) );
        scene.add( sphere );

        // Plane
        plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
        plane.position.y = - 200;
        plane.rotation.x = - Math.PI / 1.8;
        scene.add( plane );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        effect = new AsciiEffect( renderer, ' .:-+*#', { invert: true } );
        effect.setSize( window.innerWidth, window.innerHeight );
        effect.domElement.style.color = '#e68665';
        effect.domElement.style.background = 'black'; //can be linear-gradient
        document.body.appendChild( effect.domElement );

        controls = new TrackballControls( camera, effect.domElement );

        controls.noZoom = true;

        window.addEventListener( 'resize', onWindowResize );
    }

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (sphere && plane && camera && controls && scene && renderer && effect){
                animate();
            };
        }, 50);

        return () => clearInterval(intervalId);
    }, [start]);

    useEffect(() => {
        init();
    }, [])
    return (
        <main>
            <div className="absolute bottom-[50%] left-[20%]">
                <h1 className={`text-xl text-primary md:text-3xl md:leading-normal`}>Elias Leguizamon</h1>
            </div>
        </main>
    )
}
