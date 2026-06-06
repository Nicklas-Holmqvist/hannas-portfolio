'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import ParagraphItalic from './ParagraphItalic';

function EventNotStrong() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 py-32 my-16 text-white bg-primary`}>
      <p className="pb-2">
        Ett tryggt space för vila, närvaro och återhämtning.
      </p>
      <h2 className="text-3xl md:text-4xl">
        Här behöver du inte vara stark hela tiden
      </h2>
      <ParagraphItalic text="Du behöver inte prestera." />
      <ParagraphItalic text="Du behöver inte bära allt ensam." />
      <ParagraphItalic text="Du behöver inte fixa dig själv." />
      <p className="pt-4 font-bold">Du får bara vara.</p>
    </motion.section>
  );
}

export default EventNotStrong;
