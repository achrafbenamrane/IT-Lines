'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ITLinesVisualProps {
  variant?: 'hero' | 'section' | 'minimal';
  className?: string;
}

const ITLinesVisual = ({ variant = 'minimal', className = '' }: ITLinesVisualProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dots = [
    { x: 20, y: 30, delay: 0 },
    { x: 80, y: 20, delay: 0.2 },
    { x: 60, y: 70, delay: 0.4 },
    { x: 30, y: 80, delay: 0.6 },
  ];

  const lines = [
    { x1: 20, y1: 30, x2: 80, y2: 20, delay: 0.8 },
    { x1: 80, y1: 20, x2: 60, y2: 70, delay: 1.0 },
    { x1: 60, y1: 70, x2: 30, y2: 80, delay: 1.2 },
  ];

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.1))' }}
      >
        {/* Animated Lines */}
        {lines.map((line, index) => (
          <motion.line
            key={`line-${index}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#gradient)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{
              duration: 1.5,
              delay: line.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Connection Dots */}
        {dots.map((dot, index) => (
          <motion.circle
            key={`dot-${index}`}
            cx={dot.x}
            cy={dot.y}
            r="1.5"
            fill="#3b82f6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: dot.delay,
              type: "spring",
              stiffness: 200
            }}
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ITLinesVisual;