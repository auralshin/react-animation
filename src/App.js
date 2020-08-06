import React, { useState, useRef } from "react";
import "./App.css";
import { orbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend } from "react-three-fiber";
import { useSpring, a } from 'react-spring/three'

extend({orbitControls});

const App = () => {

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale : active ? [1.5,1.5,1.5] : [1,1,1]
  })

  return (
    <a.mesh
    
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial
        attach="material"
        color={hovered ? "hotpink" : "red"}
      />
    </a.mesh>
  );
};

export default () => (
  <Canvas>
    <App />
  </Canvas>
);
