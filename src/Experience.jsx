import * as THREE from "three";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Experience() {
  const { perfVisible } = useControls({ perfVisible: false });

  useFrame(() => {
    // console.log("animation!");
  });

  return (
    <>
      {/* Environment */}
      {perfVisible && <Perf position={"top-left"} />}
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={2} position={[1, 2, 3]} />
      <color args={["#f7e0b7"]} attach={"background"} />

      {/* Objects */}
      <mesh castShadow position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color={"#00ffff"} />
      </mesh>

      <mesh castShadow position={[-2, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"#fff000"} />
      </mesh>

      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={"#63ffc3"} />
      </mesh>
    </>
  );
}
