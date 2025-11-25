'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function RotatingIcon({ icon, isHovered }: { icon: string; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += isHovered ? 0.05 : 0.02;
      meshRef.current.rotation.x += 0.01;
    }
  });

  const getGeometry = () => {
    switch (icon) {
      case 'gear': return new THREE.TorusGeometry(0.8, 0.3, 8, 16);
      case 'circuit': return new THREE.OctahedronGeometry(1);
      case 'cloud': return new THREE.SphereGeometry(1, 16, 16);
      default: return new THREE.BoxGeometry(1, 1, 1);
    }
  };

  return (
    <mesh ref={meshRef}>
      <primitive object={getGeometry()} />
      <meshStandardMaterial 
        color={isHovered ? "#8b5cf6" : "#3b82f6"} 
        transparent 
        opacity={0.8}
        wireframe={icon === 'circuit'}
      />
    </mesh>
  );
}

interface ServiceCard3DProps {
  children: React.ReactNode;
  icon: string;
  className?: string;
}

export default function ServiceCard3D({ children, icon, className = '' }: ServiceCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5, 
        z: 50,
        transition: { duration: 0.3 }
      }}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* 3D Icon Background */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[2, 2, 2]} />
          <RotatingIcon icon={icon} isHovered={isHovered} />
        </Canvas>
      </div>
      
      {/* Card Content */}
      <motion.div
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
      
      {/* 3D Shadow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10"
        animate={{
          scale: isHovered ? 1.05 : 1,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transform: 'translateZ(-20px)',
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  );
}