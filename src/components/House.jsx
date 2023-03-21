import { useGLTF } from '@react-three/drei';
import React from 'react';

const House = (props) => {
  const { scene } = useGLTF('models/parkedge_final_1k.glb');
  return <primitive {...props} object={scene} />;
};

export default House;

useGLTF.preload('models/parkedge_final_1k.glb');
