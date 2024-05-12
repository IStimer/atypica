import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import GUI from 'lil-gui';
import waterVertexShader from '../shaders/water/vertex.glsl';
import waterFragmentShader from '../shaders/water/fragment.glsl';

extend({ OrbitControls });

const Water = () => {
    const meshRef = useRef();
    const { size, camera } = useThree();
    const uniforms = useRef({
        uTime: { value: 0 },
        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
        uBigWavesSpeed: { value: 0.75 },
        uSmallWavesElevation: { value: 0.15 },
        uSmallWavesFrequency: { value: 3 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 4 },
        uDepthColor: { value: new THREE.Color('#186691') },
        uSurfaceColor: { value: new THREE.Color('#9bd8ff') },
        uColorOffset: { value: 0.08 },
        uColorMultiplier: { value: 5 }
    });

    useFrame(({ clock }) => {
        uniforms.current.uTime.value = clock.getElapsedTime();
    });

    return (
        <mesh ref={meshRef} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[2, 2, 512, 512]} />
            <shaderMaterial
                vertexShader={waterVertexShader}
                fragmentShader={waterFragmentShader}
                uniforms={uniforms.current}
            />
        </mesh>
    );
};

const Scene = () => {
    return <Water />;
};

const ContainerCanvasSea = () => {
    return (
        <section className="container-canvas-sea">
            <Canvas>
                <ambientLight intensity={0.5} />
                <Scene />
                <OrbitControls enableDamping={true} />
            </Canvas>
        </section>
    );
};

export default ContainerCanvasSea;
