'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Button from '../Button';

function EventNotAlone() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 pt-20 pb-24`}>
      <h2 className="text-3xl md:text-4xl">
        Du behöver inte bära allt ensam längre.
      </h2>
      <p className="max-w-[70ch] mx-auto pb-8">
        Anmäl ditt intresse för att få första tillgång till platserna.
      </p>
      <Button
        type={'primary'}
        label={'Jag vill ha en plats'}
        url={
          'https://www.bokadirekt.se/boka-tjanst/hanna-klang-growthmindsetandsoul-130907/retreat-mod-att-mjukna-12-13-september-3471163'
        }
      />
    </motion.section>
  );
}

export default EventNotAlone;
