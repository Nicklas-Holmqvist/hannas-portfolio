'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Lines from '../Lines';
import Paragraph from './Paragraph';

function EventTogether() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 bg-white py-8`}>
      <Lines />
      <h2 className="text-3xl md:text-4xl">Tillsammans</h2>
      <Paragraph text="Tillsammans skapar vi ett retreat där hela du får plats." />
      <Paragraph
        text="Ett mjukt och tryggt rum för vila, läkande, gemenskap och återkontakt
              med kroppen, hjärtat och intuitionen."
      />
      <Paragraph
        text="Vår intention med Mod att mjukna är att du ska få känna dig hållen,
              sedd och fri att bara vara, utan krav på prestation eller att behöva
              fixa dig själv."
      />
      <Lines />
    </motion.section>
  );
}

export default EventTogether;
