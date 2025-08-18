'use client';

import { useMediaQuery } from 'react-responsive';

type VideoComponentProps = {
  //eslint-disable-line
  data: any;
};

function VideoComponent({ data }: VideoComponentProps) {
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
      src={`${
        isTabletOrMobile ? '/hanna_hemsida.mp4' : '/hanna_hemsida_hog.mp4'
      }`}
    />
  );
}

export default VideoComponent;
