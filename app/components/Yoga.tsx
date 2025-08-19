'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Button from './Button';
import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type YogaProps = {
  data: YogaData;
};

export type YogaData = {
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
  yogaAdvantage: {
    title: string;
    information: string;
    advantage: Array<{
      id: string;
      information: string;
      title?: string;
      image: {
        alt: string;
        url: string;
      };
    }>;
  }[];
};

function Yoga({ data }: YogaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="yoga"
      ref={ref}
      className={`max-w-[1800] ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24`}>
      <InfoSection data={data} />
      <AdvantageSection data={data.yogaAdvantage[0]} />
      <div className="flex justify-center pt-16 space-x-4">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </motion.section>
  );
}

export default Yoga;
