"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/features/theme/ThemeContext";

/* ─────────────────────────────────────────────
   Network Topology — dev/architecture oriented
   ───────────────────────────────────────────── */
function NetworkTopology() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  const { theme } = useTheme();

  useFrame((state) => {
    if (!meshRef.current || !innerRef.current) return;
    const t = state.clock.elapsedTime;

    // Gentle rotation
    meshRef.current.rotation.y = t * 0.05;
    meshRef.current.rotation.x = t * 0.03;
    
    innerRef.current.rotation.y = -t * 0.08;
    innerRef.current.rotation.z = t * 0.05;

    // Follow mouse subtly
    const targetX = pointer.x * 0.3;
    const targetY = pointer.y * 0.2;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.02);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.02);
    
    innerRef.current.position.x = meshRef.current.position.x;
    innerRef.current.position.y = meshRef.current.position.y;
  });

  const wireColor = theme === "light" ? "#6366f1" : "#8b5cf6";
  const innerColor = theme === "light" ? "#06b6d4" : "#06b6d4";

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      {/* Outer geodesic wireframe */}
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color={wireColor}
          wireframe={true}
          transparent
          opacity={theme === "light" ? 0.15 : 0.25}
        />
      </mesh>

      {/* Inner architectural core */}
      <mesh ref={innerRef} scale={1.4}>
        <octahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={innerColor}
          wireframe={true}
          transparent
          opacity={theme === "light" ? 0.2 : 0.3}
        />
      </mesh>
    </Float>
  );
}

/* ─────────────────────────────────────────────
   Orbiting Particles
   ───────────────────────────────────────────── */
function OrbitingParticles({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      sz[i] = Math.random() * 2 + 0.5;
    }
    return { positions: pos, sizes: sz };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  const particleColor = theme === "light" ? "#4f46e5" : "#a5b4fc";
  const blending = theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
  const opacity = theme === "light" ? 0.8 : 0.6;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={particleColor}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={blending}
      />
    </points>
  );
}

/* ─────────────────────────────────────────────
   Ambient Glow Lights
   ───────────────────────────────────────────── */
function Lighting() {
  const { theme } = useTheme();
  const ambientIntensity = theme === "light" ? 0.6 : 0.3;

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e0e7ff" />
      <pointLight position={[-4, 3, 2]} intensity={0.8} color="#6366f1" />
      <pointLight position={[4, -2, -3]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#a78bfa" />
    </>
  );
}

/* ─────────────────────────────────────────────
   Main Scene Export
   ───────────────────────────────────────────── */
export default function HeroScene() {
  const { theme } = useTheme();
  const handleCreated = useCallback((state: { gl: THREE.WebGLRenderer }) => {
    state.gl.setClearColor(0x000000, 0);
    state.gl.toneMapping = THREE.ACESFilmicToneMapping;
    state.gl.toneMappingExposure = 1.2;
  }, []);

  const fogColor = theme === "light" ? "#f8fafc" : "#0a0a0f";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        dpr={[1, 1.2]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ pointerEvents: "auto" }}
        gl={{ alpha: true }}
        onCreated={handleCreated}
      >
        <AdaptiveDpr pixelated />
        <fog attach="fog" args={[fogColor, 6, 18]} />
        <Lighting />
        <NetworkTopology />
        <OrbitingParticles />
      </Canvas>
    </div>
  );
}
