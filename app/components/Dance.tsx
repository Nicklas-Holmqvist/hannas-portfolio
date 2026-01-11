'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Button from './Button';
import InfoSection from './InfoSection';

type DanceProps = {
  data: DanceData;
};

export type DanceData = {
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
};

function Dance({ data }: DanceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="dance"
      ref={ref}
      className={`max-w-[1800] ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24`}>
      <InfoSection
        data={data}
        image="/dance.png"
        imageAlt={'Dans med Hanna Klang'}
      />
      <div className="text-center pt-8">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </motion.section>
  );
}

export default Dance;
