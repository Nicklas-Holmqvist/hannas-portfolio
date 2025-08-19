'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { fadeIn } from '../transitions/allTransitions';

function VideoComponent() {
  const isTabletOrMobile = useMediaQuery({
    query: '(min-width: 1500px)',
  });

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
        src={`${
          isTabletOrMobile ? '/hanna_hemsida.mp4' : '/hanna_hemsida_hog.mp4'
        }`}
      />
    </motion.div>
  );
}

export default VideoComponent;
