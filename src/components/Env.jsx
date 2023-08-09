import { Environment } from '@react-three/drei';
import React from 'react';

const Env = () => {
  return (
    <Environment
      background
      files="./environments/kloofendal_48d_partly_cloudy_puresky_1k.hdr"
      ground={{
        scale: 0,
        height: 7,
        radius: 28,
      }}
    />
  );
};

export default Env;
