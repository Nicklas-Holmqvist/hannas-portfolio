'use client';

import EventImage from './EventImage';
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const EventImagesData = [
  {
    src: '/choklad.webp',
    alt: 'Chokladceremoni bild',
  },
  {
    src: '/reflektion.webp',
    alt: 'Reflektionsbild',
  },
  {
    src: '/skog.webp',
    alt: 'Skogsbad bild',
  },
];

function EventImages() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-16 py-16 max-w-[1280px] w-[90%] mx-auto`}>
      {EventImagesData.map((image, index) =>
        EventImage({ key: index, src: image.src, alt: image.alt }),
      )}
    </motion.section>
  );
}

export default EventImages;
