'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Comment from './Comment';

type CommentSectionProps = {
  data: CommentData;
};

export type CommentData = {
  id: string;
  service: string;
  comment: string;
  user: string;
}[];

function CommentSection({ data }: CommentSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`max-w-[1200px] w-full flex flex-col mt-16 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24`}>
      <h3 className="text-center">Kund recensioner</h3>
      <div className="flex flex-row flex-wrap place-content-around pb-0">
        {data.map((comment) => (
          <Comment data={comment} />
        ))}
      </div>
    </motion.section>
  );
}

export default CommentSection;
