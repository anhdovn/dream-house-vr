import { Canvas } from '@react-three/fiber';
import { Controllers, Hands, VRButton, XR } from '@react-three/xr';
import './App.css';
import Env from './components/Env';
import House from './components/House';
function App() {
  const created = ({ scene }) => { };
  return (
    <>
      <VRButton />
      <Canvas
        onCreated={created}
        camera={{
          fov: 50,
          near: 0.1,
          far: 2000,
          position: [3, 1.2, 0],

        }}
      >
        <XR>
          <Controllers />
          <House position={[0, 0, 0]} />
          <ambientLight />
          <Env />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
