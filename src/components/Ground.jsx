import { useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
const Ground = () => {
  const grassTexture = useTexture('textures/grass.png');
  grassTexture.wrapS = THREE.RepeatWrapping;
  grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(100, 100);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[1000, 1000]} />
      <meshBasicMaterial map={grassTexture} />
    </mesh>
  );
};

export default Ground;
