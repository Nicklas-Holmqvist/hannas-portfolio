'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import ListItem from './ListItem';

function EventPrice() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="valjer-mig-sjalv"
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 grid grid-cols-1 xl:grid-cols-2 gap-4 py-16 max-w-[1280px] mx-auto`}>
      <div>
        <h2 className="text-3xl md:text-4xl">Det här ingår</h2>
        <ul>
          <ListItem listDot="star" listText="Boende" />
          <ListItem listDot="star" listText="Alla måltider, fika, te & frukt" />
          <ListItem listDot="star" listText="Yoga & meditationer" />
          <ListItem listDot="star" listText="Skogsbad & ceremonier" />
          <ListItem listDot="star" listText="Dans och rörelse" />
          <ListItem listDot="star" listText="Journaling material" />
          <ListItem listDot="star" listText="Alla workshops och sessioner" />
        </ul>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl">Investering</h2>
        <h4>
          Early Bird<br></br>*<b>8 888 kr</b>
        </h4>
        <p>*Gäller de första platserna</p>
        <h4>
          Ordinarie pris<br></br>
          <b>1 1111 kr</b>
        </h4>
        <p className="max-w-[30ch] mx-auto">
          50% handpenning betalas vid bokning för att säkra din plats
        </p>
      </div>
    </motion.section>
  );
}

export default EventPrice;
