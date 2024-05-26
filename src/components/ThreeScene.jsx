import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree, createPortal } from '@react-three/fiber';
import { useNoise, useSingleFBO } from '@funtech-inc/use-shader-fx';
import * as THREE from 'three';
import Box from './box.jsx';

const ThreeCanvas = () => {
    const ref = useRef(null);
    const { size, viewport, camera } = useThree();
    const [updateNoise, , { output }] = useNoise({
        size,
        dpr: viewport.dpr,
    });

    const offscreenScene = useMemo(() => new THREE.Scene(), []);
    const [boxView, updateRenderTarget] = useSingleFBO({
        scene: offscreenScene,
        camera,
        size,
        dpr: viewport.dpr,
        samples: 4,
    });

    useFrame((rootState) => {
        updateNoise(rootState);
        updateRenderTarget(rootState.gl);
    });

    return (
        <>
            {createPortal(
                <mesh>
                    <ambientLight intensity={Math.PI} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        decay={0}
                        intensity={Math.PI}
                    />
                    <pointLight
                        position={[-10, -10, -10]}
                        decay={0}
                        intensity={Math.PI}
                    />
                    <Box position={[-1.5, 0, 0]} />
                    <Box position={[1.5, 0, 0]} />
                </mesh>,
                offscreenScene
            )}
            <mesh>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    ref={ref}
                    transparent
                    vertexShader={`
                        varying vec2 vUv;
                        void main() {
                            vUv = uv;
                            gl_Position = vec4(position, 1.0);
                        }
                    `}
                    fragmentShader={`
                        precision highp float;
                        varying vec2 vUv;
                        uniform sampler2D u_fx;
                        uniform sampler2D u_texture;

                        void main() {
                            vec2 uv = vUv;
                            vec3 noiseMap = texture2D(u_fx, uv).rgb;
                            vec3 nNoiseMap = noiseMap * 2.0 - 1.0;
                            uv = uv * 2.0 - 1.0;
                            uv *= mix(vec2(1.0), abs(nNoiseMap.rg), .6);
                            uv = (uv + 1.0) / 2.0;
                            gl_FragColor = texture2D(u_texture, uv);
                        }
                    `}
                    uniforms={{
                        u_texture: { value: boxView.texture },
                        u_fx: { value: output },
                    }}
                />
            </mesh>
        </>
    );
};

export default ThreeCanvas;
