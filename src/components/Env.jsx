import { Environment } from '@react-three/drei';
import { useControls } from 'leva';
import React from 'react';

const Env = () => {
  const { envMapHeight, envMapRadius, envMapScale, envPreset } = useControls('ground Env', {
    envMapHeight: { value: 7, min: 0, max: 100 },
    envMapRadius: { value: 28, min: 10, max: 1000 },
    envMapScale: { value: 0, min: 0, max: 1000 },
    envPreset: {
      options: {
        1: './environments/belfast_sunset_puresky_4k.hdr',
        2: './environments/kloofendal_48d_partly_cloudy_puresky_4k.hdr',
        3: './environments/kloppenheim_06_puresky_4k.hdr',
        4: './environments/rustig_koppie_puresky_4k.hdr',
        5: './environments/wasteland_clouds_puresky_4k.hdr',
      },
    },
  });
  return (
    <Environment
      background
      files={envPreset}
      ground={{
        scale: envMapScale,
        height: envMapHeight,
        radius: envMapRadius,
      }}
    />
  );
};

export default Env;
