'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

type LineProps = {
  color?: string;
};

function Lines({ color }: LineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      ref={ref}
      className={`flex w-full justify-center py-10 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      {color === 'white' ? (
        <img src="/plant_line_white.svg" height={200} width={200} alt="" />
      ) : (
        <img src="/plant_line.svg" height={200} width={200} alt="" />
      )}
    </div>
  );
}

export default Lines;
