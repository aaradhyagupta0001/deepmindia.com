'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Globe.module.css';

const GlobeMesh = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      float latitude = acos(vPosition.y);
      float longitude = atan(vPosition.x, vPosition.z);
      
      float wave = sin(longitude * 8.0 + uTime) * 0.5 + 0.5;
      float grid = abs(sin(latitude * 10.0)) + abs(sin(longitude * 10.0));
      
      vec3 color1 = vec3(0.0, 0.6, 1.0); // Brighter blue
      vec3 color2 = vec3(0.0, 1.0, 1.0); // Cyan
      
      vec3 finalColor = mix(color1, color2, wave * grid);
      float alpha = grid * 0.5;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vPosition = normalize(position);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms = {
        uTime: { value: 0 }
      };
    }
  }, []);

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </Sphere>
  );
};

const Globe = () => {
  return (
    <div className={styles.globe}>
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
};

export default Globe;