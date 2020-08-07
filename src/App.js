import React, { useState, useRef } from "react";
import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
);

const App = () => {
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: "grey",
  });

  return (
    <a.mesh onClick={() => setActive(!active)} scale={props.scale} castShadow>
      <Controls />
      <ambientLight />
      <spotLight position={[0, 5, 5]} penumbra={1} castShadow />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

export default () => (
  <Canvas
    camera={{ position: [0, 0, 5] }}
    onCreated={({ gl }) => {
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
    }}
  >
    <fog attach="fog" args={["white", 5, 15]} />
    <App />
    <Plane />
  </Canvas>
);
