import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FloatingElement = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set((e.clientX - centerX) / 20);
      mouseY.set((e.clientY - centerY) / 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="w-64 h-64 relative"
    >
      <div className="absolute inset-0 glass-card rounded-2xl border border-white/20 shadow-xl backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl" />
        <div className="p-6 relative transform translate-z-20">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 mb-4" />
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded bg-white/20" />
            <div className="h-4 w-1/2 rounded bg-white/20" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingElement;