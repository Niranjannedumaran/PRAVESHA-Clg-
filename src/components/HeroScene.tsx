import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Ring = ({ radius, tube, color, speed, rotAxis }: { radius: number; tube: number; color: string; speed: number; rotAxis: 'x' | 'y' | 'z' }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation[rotAxis] += delta * speed; });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} wireframe />
    </mesh>
  );
};

const OrbitDot = ({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 0.6) * 0.8, Math.sin(t) * radius);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
};

const Core = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.5;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#ff2a2a" emissive="#ff0000" emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const count = 220;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[5, 5, 5]} intensity={2} color="#ff2a2a" />
    <pointLight position={[-5, -3, -5]} intensity={1.5} color="#00d4ff" />
    <Stars radius={30} depth={20} count={800} factor={2} fade speed={0.5} />
    <Particles />
    <Core />
    <Ring radius={2.2} tube={0.018} color="#00d4ff" speed={0.6} rotAxis="x" />
    <Ring radius={2.6} tube={0.014} color="#ff2a2a" speed={0.4} rotAxis="y" />
    <Ring radius={3.0} tube={0.011} color="#a855f7" speed={0.25} rotAxis="z" />
    <OrbitDot radius={2.2} speed={0.8} offset={0} color="#00d4ff" />
    <OrbitDot radius={2.6} speed={0.6} offset={2} color="#ff2a2a" />
    <OrbitDot radius={3.0} speed={0.5} offset={4} color="#a855f7" />
  </>
);

const HeroScene: React.FC = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
      <Scene />
    </Canvas>
  </div>
);

export default HeroScene;
