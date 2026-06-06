'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import ListItem from './ListItem';

function EventTakeWithYou() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 bg-white py-32 my-16`}>
      <h2 className="text-3xl md:text-4xl">Det här tar du med dig</h2>
      <div>
        <ul>
          <ListItem listDot="star" listText="Mer klarhet och inre lugn" />
          <ListItem listDot="star" listText="En djupare kontakt med kroppen" />
          <ListItem
            listDot="star"
            listText="Ökad självkärlek och självtillit"
          />
          <ListItem listDot="star" listText="Verktyg för att lyssna inåt" />
          <ListItem
            listDot="star"
            listText="Känslan av att få vara hela dig själv"
          />
        </ul>
      </div>
    </motion.section>
  );
}

export default EventTakeWithYou;
