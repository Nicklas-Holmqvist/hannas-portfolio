'use client';

import { useMediaQuery } from 'react-responsive';

function VideoComponent() {
  const isTabletOrMobile = useMediaQuery({
    query: '(min-width: 1500px)',
  });

  return (
    <video
      className="object-cover h-[100vh] w-full"
      autoPlay
      playsInline
      loop
      muted
      poster={`${
        isTabletOrMobile
          ? '/hanna_hemsida_poster.png'
          : '/hanna_hemsida_hog_poster.png'
      }`}
      src={`${
        isTabletOrMobile ? '/hanna_hemsida.mp4' : '/hanna_hemsida_hog.mp4'
      }`}
    />
  );
}

export default VideoComponent;
