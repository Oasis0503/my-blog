"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type SkillBubbleProps = {
  icon: ReactNode;
  label: string;
  x: number;
  y: number;
  size?: number;
};

const SkillBubble = ({ icon, label, x, y, size = 60 }: SkillBubbleProps) => {
  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 2,
      }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
    >
      <div 
        className="flex items-center justify-center rounded-full bg-white shadow-lg"
        style={{ width: size, height: size }}
      >
        {icon}
      </div>
      <motion.p 
        className="mt-2 text-sm font-medium"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export const FloatingSkills = () => {
  return (
    <div className="relative h-96 w-full">
      <SkillBubble 
        icon={<span className="text-2xl">🌐</span>} 
        label="Web开发" 
        x={20} 
        y={30} 
      />
      <SkillBubble 
        icon={<span className="text-2xl">📱</span>} 
        label="移动应用" 
        x={50} 
        y={60} 
      />
      <SkillBubble 
        icon={<span className="text-2xl">🎨</span>} 
        label="设计" 
        x={70} 
        y={20} 
      />
      <SkillBubble 
        icon={<span className="text-2xl">📷</span>} 
        label="摄影" 
        x={36} 
        y={52} 
      />
      {/* 添加更多技能气泡 */}
    </div>
  );
};