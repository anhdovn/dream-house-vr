import { KeyboardControls, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Debug, Physics } from '@react-three/rapier';
import './App.css';
import Env from './components/Env';
import House from './components/House';
import Player from './components/Player';

function App() {
  const created = ({ scene }) => {};
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
      ]}
    >
      <Canvas
        onCreated={created}
        camera={{
          fov: 50,
          near: 0.1,
          far: 2000,
          position: [24.06854689181336, 3.9430013373288366, 0.05905620695757375],
          quaternion: [-0.0574175831445875, 0.7039123027253196, 0.05727687233775081, 0.7056415882818822],
        }}
      >
        <Physics gravity={[0, -30, 0]}>
          <House position={[0, 0, 0]} />
          <Player />
          <Debug />
        </Physics>
        {/* <OrbitControls maxPolarAngle={Math.PI / 2.1} /> */}
        <ambientLight />
        <Env />

        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
