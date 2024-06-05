import "./style.css";
import * as THREE from "three";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [5, 2, 10],
};

const glSettings = {
  antialias: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  outPutColorSpace: THREE.SRGBColorSpace,
  transparent: true,
  depthWrite: false,
};

root.render(
  <>
    <StrictMode>
      <Canvas shadows dpr={[1, 2]} camera={cameraSettings} gl={glSettings}>
        <Experience />
      </Canvas>
    </StrictMode>
  </>
);
