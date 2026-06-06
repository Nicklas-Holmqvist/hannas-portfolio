'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import ListItem from './ListItem';

function EventFitsYou() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24`}>
      <h2 className="text-3xl md:text-4xl">Retreatet passar dig som...</h2>
      <ul>
        <ListItem
          listDot="check"
          listText="känner dig överväldigad eller emotionellt trött"
        />
        <ListItem listDot="check" listText="ofta sätter andra före dig själv" />
        <ListItem
          listDot="check"
          listText="längtar efter mer lugn och självkärlek"
        />
        <ListItem
          listDot="check"
          listText="vill komma ur huvudet och ner i kroppen"
        />
        <ListItem
          listDot="check"
          listText="söker en trygg gemenskap med andra kvinnor"
        />
        <ListItem
          listDot="check"
          listText="längtar efter att återknyta till din intuition och inre kraft"
        />
      </ul>
    </motion.section>
  );
}

export default EventFitsYou;
