import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { AnimationConfig } from '@/constants';

interface IProgressBarProps {
  duration: number;
  isActive: boolean;
}

export const ProgressBar = ({ duration, isActive }: IProgressBarProps) => {
  const animate = useAnimation();

  useEffect(() => {
    if (isActive) {
      animate.start('full');
    } else {
      animate.start('empty');
    }
  }, [isActive, animate]);

  return (
    <div className="bg-white/50">
      <motion.div
        animate={animate}
        variants={AnimationConfig.onProgressElapsed}
        initial="empty"
        transition={{
          duration: isActive ? duration : 0,
          ease: 'linear',
        }}
        className="h-0.5 bg-white"
      />
    </div>
  );
};
