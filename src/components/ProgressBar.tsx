import { motion } from 'framer-motion';

export const ProgressBar = ({ seconds }: { seconds: number }) => {
  return (
    <div className="progress-bar">
      <motion.div className="h-3 bg-purple-400 " style={{ scaleX: seconds }} />
    </div>
  );
};
