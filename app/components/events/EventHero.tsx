'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Button from '../Button';

function EventHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 relative width-full h-[90vh] m-0 p-0 text-center text-light`}>
      <div className="width-full h-full">
        <Image
          src="/hero_retreat.webp"
          fill
          className="object-cover"
          alt="Growth mindset and soul hero image"
        />
      </div>
      <div className="absolute top-[50%] left-[50%] w-[80%] transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-[5rem]">Mod att mjukna</h1>
        <p className="mt-4 mb-8  color-gray-500">
          12-13 september 2026 &#10055; Premiärretreat för kvinnor
        </p>
        <h4 className="max-w-[45ch] text-[1.5rem] mb-10 mx-auto">
          Ett retreat för kvinnor som längtar efter att sakta ner, landa i
          kroppen och återknyta kontakten med hela sig själva
        </h4>
        <Button
          type="primary"
          label="Jag väljer mig själv"
          url="#valjer-mig-sjalv"
        />
      </div>
    </motion.section>
  );
}

export default EventHero;
