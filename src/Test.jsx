import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, PerformanceMonitor } from '@react-three/drei';
import FluidSimulation from './components/FluidSimulation';

const TestPage = () => {
    const [dpr, setDpr] = useState(1);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas
                gl={{ alpha: false }}
                style={{ background: 'transparent' }}
                dpr={dpr}>
                <PerformanceMonitor onChange={({ factor }) => setDpr(1 + factor * 0.5)} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.2} />
                <OrthographicCamera makeDefault zoom={50} position={[0, 0, 10]} />
                <Suspense fallback={null}>
                    <FluidSimulation />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default TestPage;
