import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GUI from 'lil-gui';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import waterVertexShader from '../../shaders/water/vertex.glsl';
import waterFragmentShader from '../../shaders/water/fragment.glsl';

const Water = ({ hover, cameraParams, setCameraParams }) => {
    useEffect(() => {
        const gui = new GUI();

        gui.add(uniforms.current.uBigWavesElevation, 'value', 0, 1, 0.01).name('Big Wave Elevation');
        gui.add(uniforms.current.uBigWavesFrequency.value, 'x', 0, 10, 0.1).name('Big Wave Frequency X');
        gui.add(uniforms.current.uBigWavesFrequency.value, 'y', 0, 10, 0.1).name('Big Wave Frequency Y');
        gui.add(uniforms.current.uBigWavesSpeed, 'value', 0, 2, 0.01).name('Big Wave Speed');
        gui.add(uniforms.current.uSmallWavesElevation, 'value', 0, 1, 0.01).name('Small Wave Elevation');
        gui.add(uniforms.current.uSmallWavesFrequency, 'value', 0, 5, 0.1).name('Small Wave Frequency');
        gui.add(uniforms.current.uSmallWavesSpeed, 'value', 0, 1, 0.01).name('Small Wave Speed');
        gui.add(uniforms.current.uSmallIterations, 'value', 1, 8).step(1).name('Small Iterations');
        gui.addColor(uniforms.current.uDepthColor, 'value').name('Depth Color');
        gui.addColor(uniforms.current.uSurfaceColor, 'value').name('Surface Color');
        gui.add(uniforms.current.uColorOffset, 'value', 0, 1, 0.01).name('Color Offset');
        gui.add(uniforms.current.uColorMultiplier, 'value', 0, 10, 0.1).name('Color Multiplier');

        gui.add(cameraParams.current.position, 'x', -10, 10, 0.1).name('Camera Position X').onChange(value => setCameraParams({ ...cameraParams.current, position: { ...cameraParams.current.position, x: value } }));
        gui.add(cameraParams.current.position, 'y', -10, 10, 0.1).name('Camera Position Y').onChange(value => setCameraParams({ ...cameraParams.current, position: { ...cameraParams.current.position, y: value } }));
        gui.add(cameraParams.current.position, 'z', -10, 10, 0.1).name('Camera Position Z').onChange(value => setCameraParams({ ...cameraParams.current, position: { ...cameraParams.current.position, z: value } }));
        gui.add(cameraParams.current, 'fov', 10, 100, 1).name('Camera FOV').onChange(value => setCameraParams({ ...cameraParams.current, fov: value }));
        gui.add(cameraParams.current.rotation, 'x', -Math.PI, Math.PI, 0.01).name('Camera Rotation X').onChange(value => setCameraParams({ ...cameraParams.current, rotation: { ...cameraParams.current.rotation, x: value } }));
        gui.add(cameraParams.current.rotation, 'y', -Math.PI, Math.PI, 0.01).name('Camera Rotation Y').onChange(value => setCameraParams({ ...cameraParams.current, rotation: { ...cameraParams.current.rotation, y: value } }));
        gui.add(cameraParams.current.rotation, 'z', -Math.PI, Math.PI, 0.01).name('Camera Rotation Z').onChange(value => setCameraParams({ ...cameraParams.current, rotation: { ...cameraParams.current.rotation, z: value } }));

        return () => gui.destroy();
    }, [setCameraParams]);

    const meshRef = useRef();
    const uniforms = useRef({
        uTime: { value: 0 },
        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.5 },
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 4 },
        uDepthColor: { value: new THREE.Color('#186691') },
        uSurfaceColor: { value: new THREE.Color('#9bd8ff') },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 }
    });

    const targetIterations = useRef(4);
    const targetFrequency = useRef(3);

    useFrame(({ clock, camera }) => {
        uniforms.current.uTime.value = clock.getElapsedTime();
        const easingFactor = 0.35;
        uniforms.current.uSmallIterations.value += (targetIterations.current - uniforms.current.uSmallIterations.value);
        uniforms.current.uSmallWavesFrequency.value += (targetFrequency.current - uniforms.current.uSmallWavesFrequency.value) * easingFactor;

        camera.position.set(cameraParams.current.position.x, cameraParams.current.position.y, cameraParams.current.position.z);
        camera.rotation.set(cameraParams.current.rotation.x, cameraParams.current.rotation.y, cameraParams.current.rotation.z);
        camera.fov = cameraParams.current.fov;
        camera.updateProjectionMatrix();
    });

    return (
        <mesh ref={meshRef} rotation-x={-Math.PI / 2} position-y={-1}>
            <planeGeometry args={[8, 48, 512, 512]} />
            <shaderMaterial
                vertexShader={waterVertexShader}
                fragmentShader={waterFragmentShader}
                uniforms={uniforms.current}
            />
        </mesh>
    );
}
const ContainerCanvasSea = () => {
    const [hover, setHover] = useState(false);
    const cameraParams = useRef({
        position: { x: 0.2, y: 0.8, z: 6 },
        rotation: { x: -0.55, y: 0, z: 0 },
        fov: 50
    });
    const setCameraParams = (newParams) => {
        cameraParams.current = newParams;
    };

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('.wrapper'),
            smooth: true,
            getDirection: true,
            reloadOnContextChange: true,
            use: 'scroll'
        });

        let lastScrollY = 0;

        scroll.on('scroll', (args) => {
            const scrollY = args.scroll.y;
            const isScrollingDown = scrollY > lastScrollY;
            lastScrollY = scrollY;

            const scrollFactor = isScrollingDown ? -0.00003 : 0.00003;

            const newZ = cameraParams.current.position.z + (scrollY * scrollFactor);
            // const newRotationX = cameraParams.current.rotation.x + (scrollY * rotationFactor);

            gsap.to(cameraParams.current.position, { z: newZ, duration: 0.5, onUpdate: () => {
                    setCameraParams({ ...cameraParams.current, position: { ...cameraParams.current.position, z: newZ } });
                }});
            // gsap.to(cameraParams.current.rotation, { x: newRotationX, duration: 0.5, onUpdate: () => {
            //         setCameraParams({ ...cameraParams.current, rotation: { ...cameraParams.current.rotation, x: newRotationX } });
            //     }});
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <section className="container-canvas-sea">
            <Canvas id="canvasSea" className="canvas-sea"
                    camera={{ position: [cameraParams.current.position.x, cameraParams.current.position.y, cameraParams.current.position.z], fov: cameraParams.current.fov }}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
            >
                <ambientLight intensity={0.5} />
                <Water hover={hover} cameraParams={cameraParams} setCameraParams={setCameraParams} />
            </Canvas>
        </section>
    );
}

export default ContainerCanvasSea;
