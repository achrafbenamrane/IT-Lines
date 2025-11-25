'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const [positions, setPositions] = useState<Array<{ top: number; left: number }>>([]);
  
  const shapes = [
    { color: 'from-blue-400 to-cyan-400', size: 'w-64 h-64', delay: 0, duration: 20, x: [0, 100, 0], y: [0, -100, 0] },
    { color: 'from-purple-400 to-pink-400', size: 'w-96 h-96', delay: 2, duration: 25, x: [0, -100, 0], y: [0, 100, 0] },
    { color: 'from-pink-400 to-orange-400', size: 'w-72 h-72', delay: 4, duration: 22, x: [0, 50, 0], y: [0, -50, 0] },
    { color: 'from-orange-400 to-yellow-400', size: 'w-80 h-80', delay: 1, duration: 18, x: [0, -80, 0], y: [0, 80, 0] },
  ];

  useEffect(() => {
    // Generate random positions only on the client side
    setPositions(
      shapes.map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    );
  }, []);

  // Don't render anything until positions are generated
  if (positions.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          animate={{
            x: shape.x,
            y: shape.y,
            rotate: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: shape.delay,
          }}
          className={`absolute ${shape.size} bg-gradient-to-br ${shape.color} rounded-full blur-3xl opacity-20`}
          style={{
            top: `${positions[index].top}%`,
            left: `${positions[index].left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
