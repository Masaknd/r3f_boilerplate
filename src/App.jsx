import * as THREE from 'three';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import React, { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { cameraSettings, glSettings } from './Setting';

export default function App() {
  const { perfVisible } = useControls({ perfVisible: false });

  // useFrame(() => {
  //   // console.log("animation!");
  // });

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={cameraSettings} gl={glSettings}>
        {/* Environment */}
        {perfVisible && <Perf position={'top-left'} />}
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow intensity={2} position={[1, 2, 3]} />
        <color args={['#f7e0b7']} attach={'background'} />

        {/* Objects */}
        <mesh castShadow position={[2, 0, 0]} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color={'#00ffff'} />
        </mesh>

        <mesh castShadow position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color={'#fff000'} />
        </mesh>

        <mesh receiveShadow rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={'#63ffc3'} />
        </mesh>
      </Canvas>
    </>
  );
}
