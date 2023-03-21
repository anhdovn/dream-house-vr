import './App.css';
import { Canvas } from '@react-three/fiber';
import House from './components/House';
import { OrbitControls } from '@react-three/drei';
import Env from './components/Env';
import Ground from './components/Ground';

function App() {
  const created = ({ scene }) => {};
  return (
    <Canvas
      onCreated={created}
      camera={{
        fov: 50,
        near: 0.1,
        far: 500,
        position: [34.16542976040575, 11.382418065813287, -14.16712418658127],
        quaternion: [-0.10823923563187204, 0.7008564845671802, 0.10890365982803848, 0.6965805400569418],
      }}
    >
      <House position={[0, 0.3, 0]} />
      <Ground />
      <OrbitControls maxPolarAngle={Math.PI / 2.1} />
      <Env />
    </Canvas>
  );
}

export default App;
