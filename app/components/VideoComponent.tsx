'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../transitions/allTransitions';

function VideoComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeIn}
      className="h-[100vh] w-full">
      <video
        className="object-cover h-[100vh] w-full"
        autoPlay
        playsInline
        loop
        muted
        src="/tablet_video.mp4"
      />
    </motion.div>
  );
}

export default VideoComponent;
