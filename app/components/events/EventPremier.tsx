'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Lines from '../Lines';
import Paragraph from './Paragraph';

function EventPremier() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 py-8 text-white bg-primary`}>
      <Lines color="white" />
      <h2>Premiärretreat &#10055; Begränsat antal platser</h2>

      <p className="max-w-[70ch] mx-auto pb-8">
        Det här är första gången vi håller
        <i className="font-bold">Mod att mjukna</i> i denna form.
      </p>
      <Paragraph
        text="Vi önskar skapa en liten och personlig grupp där varje deltagare får
          känna sig sedd, hållen och trygg."
      />
      <Lines color="white" />
    </motion.section>
  );
}

export default EventPremier;
