'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';

type MyJourneyProps = {
  data: MyJourneyData;
};

export type MyJourneyData = {
  title: string;
  information: string;
};
function MyJourney({ data }: MyJourneyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id={data.title}
      ref={ref}
      className={`max-w-[1800] scroll-mt-30 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <h2 className="text-center">{data.title}</h2>
      <div className="text-center max-w-2xl">
        <ReactMarkdown>{data.information}</ReactMarkdown>
      </div>
    </motion.section>
  );
}

export default MyJourney;
