import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// Location coordinates (latitude, longitude)
const locations = {
  uk: { lat: 51.5074, lng: -0.1278, label: 'United Kingdom', color: '#072048' },
  kenya: { lat: -1.2921, lng: 36.8219, label: 'Kenya', color: '#eca52e' },
  uganda: { lat: 0.3476, lng: 32.5825, label: 'Uganda', color: '#eca52e' },
  zambia: { lat: -15.3875, lng: 28.3228, label: 'Zambia', color: '#eca52e' },
  brazil: { lat: -14.235, lng: -51.9253, label: 'Brazil', color: '#eca52e' },
  philippines: { lat: 12.8797, lng: 121.774, label: 'Philippines', color: '#eca52e' },
};

// Convert lat/lng to 3D coordinates on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Create arc points between two locations
function createArcPoints(start: THREE.Vector3, end: THREE.Vector3, segments: number = 50): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;

    // Spherical interpolation
    const point = new THREE.Vector3().lerpVectors(start, end, t);

    // Add height to create arc effect
    const arcHeight = 1 + 0.3 * Math.sin(t * Math.PI);
    point.normalize().multiplyScalar(1.02 * arcHeight);

    points.push(point);
  }

  return points;
}

// Globe mesh component
function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Slow auto-rotation
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshPhongMaterial
        color="#072048"
        transparent
        opacity={0.9}
        shininess={10}
      />
    </Sphere>
  );
}

// Grid lines on globe
function GlobeGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.y += 0.001;
    }
  });

  const latitudeLines = useMemo(() => {
    const lines = [];
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 5) {
        points.push(latLngToVector3(lat, lng, 1.01));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  const longitudeLines = useMemo(() => {
    const lines = [];
    for (let lng = 0; lng < 360; lng += 30) {
      const points: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLngToVector3(lat, lng, 1.01));
      }
      lines.push(points);
    }
    return lines;
  }, []);

  return (
    <group ref={gridRef}>
      {latitudeLines.map((points, i) => (
        <Line
          key={`lat-${i}`}
          points={points}
          color="#5b1fa3"
          lineWidth={0.5}
          opacity={0.3}
          transparent
        />
      ))}
      {longitudeLines.map((points, i) => (
        <Line
          key={`lng-${i}`}
          points={points}
          color="#5b1fa3"
          lineWidth={0.5}
          opacity={0.3}
          transparent
        />
      ))}
    </group>
  );
}

// Location markers
function LocationMarker({ lat, lng, label, color, isMain = false }: {
  lat: number;
  lng: number;
  label: string;
  color: string;
  isMain?: boolean;
}) {
  const position = useMemo(() => latLngToVector3(lat, lng, 1.02), [lat, lng]);
  const markerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (markerRef.current) {
      // Pulse effect
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.1;
      markerRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      <mesh ref={markerRef}>
        <sphereGeometry args={[isMain ? 0.04 : 0.03, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[isMain ? 0.06 : 0.045, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Label */}
      <Html
        position={[0, 0.1, 0]}
        center
        style={{
          color: 'white',
          fontSize: '10px',
          fontWeight: 'bold',
          textShadow: '0 0 10px rgba(0,0,0,0.8)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {label}
      </Html>
    </group>
  );
}

// Connection arcs between locations
function ConnectionArc({ start, end, color = '#eca52e' }: {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
  color?: string;
}) {
  const points = useMemo(() => {
    const startPos = latLngToVector3(start.lat, start.lng, 1.02);
    const endPos = latLngToVector3(end.lat, end.lng, 1.02);
    return createArcPoints(startPos, endPos);
  }, [start, end]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      opacity={0.8}
      transparent
    />
  );
}

// Animated particles along connection lines
function ConnectionParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions: number[] = [];
    const connections = [
      { start: locations.uk, end: locations.kenya },
      { start: locations.uk, end: locations.uganda },
      { start: locations.uk, end: locations.zambia },
      { start: locations.uk, end: locations.brazil },
      { start: locations.uk, end: locations.philippines },
    ];

    connections.forEach((conn) => {
      const startPos = latLngToVector3(conn.start.lat, conn.start.lng, 1.02);
      const endPos = latLngToVector3(conn.end.lat, conn.end.lng, 1.02);
      const arcPoints = createArcPoints(startPos, endPos, 10);

      arcPoints.forEach((point) => {
        positions.push(point.x, point.y, point.z);
      });
    });

    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    return geo;
  }, [particles]);

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        color="#eca52e"
        size={0.02}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// Main Globe Scene
function GlobeScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5b1fa3" />

      {/* Globe */}
      <GlobeMesh />
      <GlobeGrid />

      {/* Location Markers */}
      <LocationMarker {...locations.uk} isMain />
      <LocationMarker {...locations.kenya} />
      <LocationMarker {...locations.uganda} />
      <LocationMarker {...locations.zambia} />
      <LocationMarker {...locations.brazil} />
      <LocationMarker {...locations.philippines} />

      {/* Connection Lines */}
      <ConnectionArc
        start={{ lat: locations.uk.lat, lng: locations.uk.lng }}
        end={{ lat: locations.kenya.lat, lng: locations.kenya.lng }}
      />
      <ConnectionArc
        start={{ lat: locations.uk.lat, lng: locations.uk.lng }}
        end={{ lat: locations.uganda.lat, lng: locations.uganda.lng }}
      />
      <ConnectionArc
        start={{ lat: locations.uk.lat, lng: locations.uk.lng }}
        end={{ lat: locations.zambia.lat, lng: locations.zambia.lng }}
      />
      <ConnectionArc
        start={{ lat: locations.uk.lat, lng: locations.uk.lng }}
        end={{ lat: locations.brazil.lat, lng: locations.brazil.lng }}
      />
      <ConnectionArc
        start={{ lat: locations.uk.lat, lng: locations.uk.lng }}
        end={{ lat: locations.philippines.lat, lng: locations.philippines.lng }}
      />

      {/* Particles */}
      <ConnectionParticles />

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={1.5}
        maxDistance={4}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

// Main Globe Component
interface GlobeProps {
  className?: string;
}

const Globe = ({ className = '' }: GlobeProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
};

export default Globe;
