import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const MovingStars = () => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.05 * delta; // Increase the rotation speed
    ref.current.rotation.y += 0.19 * delta; // Increase the rotation speed
  });

  return (
    <group ref={ref}>
      <Stars count={1000} />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <MovingStars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
