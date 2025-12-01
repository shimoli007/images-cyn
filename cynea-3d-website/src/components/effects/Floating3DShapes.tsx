import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * speed * 0.5) * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.8}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.15, 16, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function AnimatedOctahedron({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.z = clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.4} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.4}
          metalness={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

interface Floating3DShapesProps {
  className?: string;
}

const Floating3DShapes = ({ className = '' }: Floating3DShapesProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5b1fa3" />

        <AnimatedSphere position={[-3, 2, -2]} color="#5b1fa3" speed={0.8} />
        <AnimatedSphere position={[3, -1.5, -1]} color="#eca52e" speed={1.2} distort={0.4} />
        <AnimatedTorus position={[2.5, 2, -3]} color="#072048" speed={0.6} />
        <AnimatedTorus position={[-2.5, -2, -2]} color="#0d9488" speed={1} />
        <AnimatedOctahedron position={[0, 3, -4]} color="#5b1fa3" speed={0.7} />
        <AnimatedOctahedron position={[-3, -1, -3]} color="#eca52e" speed={0.9} />
      </Canvas>
    </div>
  );
};

export default Floating3DShapes;
