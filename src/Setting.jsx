import * as THREE from "three";

export const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [5, 2, 10],
};

export const glSettings = {
  antialias: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  outPutColorSpace: THREE.SRGBColorSpace,
  transparent: true,
  depthWrite: false,
};
