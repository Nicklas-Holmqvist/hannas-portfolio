'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Button from './Button';
import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type ReikiProps = {
  data: ReikiData;
};

export type ReikiData = {
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
  reikiAdvantage: {
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

function Reiki({ data }: ReikiProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="reiki"
      ref={ref}
      className={`max-w-[1800] scroll-mt-24 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <InfoSection
        data={data}
        image="/reiki.png"
        imageAlt="Reiki healing med Hanna Klang"
      />
      <div className="text-center py-8">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
      <AdvantageSection data={data.reikiAdvantage[0]} />
    </motion.section>
  );
}

export default Reiki;
