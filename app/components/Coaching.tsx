'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Button from './Button';
import InfoSection from './InfoSection';

type CoachingProps = {
  data: CoachingData;
};

export type CoachingData = {
  id: string;
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
};

function Coaching({ data }: CoachingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="coaching"
      ref={ref}
      className={`max-w-[1800] scroll-mt-24 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <InfoSection
        data={data}
        image="/coaching.png"
        imageAlt={'Coaching med Hanna Klang'}
      />
      <div className="text-center pt-8">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </motion.section>
  );
}

export default Coaching;
