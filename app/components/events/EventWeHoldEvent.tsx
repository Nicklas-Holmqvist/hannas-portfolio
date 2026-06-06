'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Paragraph from './Paragraph';

function EventWeHoldEvent() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 pt-16`}>
      <h2 className="text-3xl md:text-4xl">Vi som håller retretet</h2>
      <Paragraph
        text=" Mod att mjukna är skapat av Hanna Klang tillsammans med Ellen Cämpe,
          två kvinnor med lång erfarenhet av att guida människor genom
          förändring, återhämtning och personlig utveckling, både professionellt
          och genom egna livsresor."
      />
      <Paragraph
        text="Tillsammans delar vi en vision om att skapa trygga rum där kvinnor får
          släppa prestation, landa i kroppen och hitta tillbaka till sig själva."
      />
    </motion.section>
  );
}

export default EventWeHoldEvent;
