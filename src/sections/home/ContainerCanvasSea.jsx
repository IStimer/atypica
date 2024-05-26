import React, { useRef, useEffect, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import GUI from 'lil-gui'
import waterVertexShader from '../../shaders/water/vertex.glsl'
import waterFragmentShader from '../../shaders/water/fragment.glsl'


const Water = ( { hover }) => {

    useEffect(() => {
        const gui = new GUI()
        gui.add(uniforms.current.uBigWavesElevation, 'value', 0, 1, 0.01).name('Big Wave Elevation')
        gui.add(uniforms.current.uBigWavesFrequency.value, 'x', 0, 10, 0.1).name('Big Wave Frequency X')
        gui.add(uniforms.current.uBigWavesFrequency.value, 'y', 0, 10, 0.1).name('Big Wave Frequency Y')
        gui.add(uniforms.current.uBigWavesSpeed, 'value', 0, 2, 0.01).name('Big Wave Speed')
        gui.add(uniforms.current.uSmallWavesElevation, 'value', 0, 1, 0.01).name('Small Wave Elevation')
        gui.add(uniforms.current.uSmallWavesFrequency, 'value', 0, 5, 0.1).name('Small Wave Frequency')
        gui.add(uniforms.current.uSmallWavesSpeed, 'value', 0, 1, 0.01).name('Small Wave Speed')
        gui.add(uniforms.current.uSmallIterations, 'value', 1, 8).step(1).name('Small Iterations')
        gui.addColor(uniforms.current.uDepthColor, 'value').name('Depth Color')
        gui.addColor(uniforms.current.uSurfaceColor, 'value').name('Surface Color')
        gui.add(uniforms.current.uColorOffset, 'value', 0, 1, 0.01).name('Color Offset')
        gui.add(uniforms.current.uColorMultiplier, 'value', 0, 10, 0.1).name('Color Multiplier')

        return () => gui.destroy()
    }, [])

    const meshRef = useRef()
    const { size, camera } = useThree()
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
    })

    const targetIterations = useRef(4)
    const targetFrequency = useRef(3)

    useEffect(() => {
        targetIterations.current = hover ? 1 : 4
        targetFrequency.current = hover ? 1.5 : 3
    }, [hover])

    useFrame(({ clock }) => {
        uniforms.current.uTime.value = clock.getElapsedTime()
        const easingFactor = 0.35
        uniforms.current.uSmallIterations.value += (targetIterations.current - uniforms.current.uSmallIterations.value)
        uniforms.current.uSmallWavesFrequency.value += (targetFrequency.current - uniforms.current.uSmallWavesFrequency.value) * easingFactor
    })


    return (
        <mesh ref={meshRef} rotation-x={-Math.PI * 0.5}>
            <planeGeometry args={[4, 4, 512, 512]} />
            <shaderMaterial
                vertexShader={waterVertexShader}
                fragmentShader={waterFragmentShader}
                uniforms={uniforms.current}
            />
        </mesh>
    )
}

const ContainerCanvasSea = () => {
    const [hover, setHover] = useState(false)

    return (
        <section className="container-canvas-sea">
            <Canvas
                camera={{ position: [2, 2, 6], fov: 10.5}}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <ambientLight intensity={0.5} />
                <Water hover={hover} />
            </Canvas>
        </section>
    )
}

export default ContainerCanvasSea
