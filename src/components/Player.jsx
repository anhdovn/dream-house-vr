import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const Player = ({ lerp = THREE.MathUtils.lerp }) => {
  const player = useRef();
  const rapier = useRapier();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    // console.log(player.current.translation(), player.current);
  }, []);

  useFrame((state, delta) => {
    const { forward, backward, left, right, jump } = getKeys();

    const velocity = player.current.linvel();
    console.log('velocity', velocity);
    // update camera
    const playerPosition = player.current.translation();
    state.camera.position.copy(playerPosition);

    // movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation);
    player.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    // jumping
    const world = rapier.world.raw();
    const ray = world.castRay(new RAPIER.Ray(player.current.translation(), { x: 0, y: -1, z: 0 }));
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
    if (jump && grounded) player.current.setLinvel({ x: 0, y: 7.5, z: 0 });
  });
  return (
    <RigidBody
      ref={player}
      colliders={false}
      mass={1}
      type="dynamic"
      position={[15, 2, 1]}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.5, 0.2]} />
    </RigidBody>
  );
};

export default Player;
