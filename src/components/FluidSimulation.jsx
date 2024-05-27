import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useFluid } from '@funtech-inc/use-shader-fx';

const FluidSimulation = () => {
    const { size, viewport } = useThree();
    const [updateFluid, , { output }] = useFluid({
        size,
        dpr: viewport.dpr * 0.25, // Réduire la résolution pour améliorer les performances
        curl_strength: 15, // Réduire certains paramètres pour améliorer les performances
        density_dissipation: 0.5,
        fluid_color: { r: 0, g: 0, b: 0, a: 1.0 }, // Garder une couleur vive avec alpha complet
        pressure_dissipation: 0.7,
        pressure_iterations: 10, // Réduire le nombre d'itérations pour améliorer les performances
        velocity_acceleration: 5, // Réduire pour améliorer les performances
        velocity_dissipation: 0.9,
    });

    useFrame((state) => {
        updateFluid(state);
    });

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={output}
                transparent={true}
                opacity={1.0}
            />
        </mesh>
    );
};

export default FluidSimulation;
