// import { useState, useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial, Preload } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';

// // const Stars = (props) => {
// //   const ref = useRef();
// //   const [sphere] = useState(() =>
// //     random.inSphere(new Float32Array(5000), { radius: 1.2 })
// //   );
// //   console.log('generated sphere positions', sphere);

// //   useFrame((state, delta) => {
// //     ref.current.rotation.x -= delta / 10;
// //     ref.current.rotation.y -= delta / 15;
// //   });

// //   return (
// //     <group rotation={[0, 0, Math.PI / 4]}>
// //       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
// //         <PointMaterial
// //           transparent
// //           color="#f272c8"
// //           size={0.002}
// //           sizeAttenuation={true}
// //           depthWrite={false}
// //         />
// //       </Points>
// //     </group>
// //   );
// // };

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => {
//     const positions = [];
//     const radius = 1.2;
//     const numPoints = 5000;

//     for (let i = 0; i < numPoints; i++) {
//       const u = Math.random();
//       const v = Math.random();
//       const theta = 2 * Math.PI * u;
//       const phi = Math.acos(2 * v - 1);
//       const x = radius * Math.sin(phi) * Math.cos(theta);
//       const y = radius * Math.sin(phi) * Math.sin(theta);
//       const z = radius * Math.cos(phi);

//       positions.push(x, y, z);
//     }

//     return new Float32Array(positions);
//   });

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//       {/* <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas> */}
//     </div>
//   );
// };

// export default StarsCanvas;

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
