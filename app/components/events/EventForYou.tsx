'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Paragraph from './Paragraph';

function EventForYou() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 pt-16`}>
      <h2 className="text-3xl md:text-4xl">
        Det här retreater är för dig som...
      </h2>
      <Paragraph
        text="För dig som är trött på att alltid vara stark, duktig och tillgänglig
          för alla andra. Under två dagar får du lämna vardagens brus och
          istället landa i naturen, kroppen och nuet."
      />
      <Paragraph
        text="Genom yoga, meditation, dans, skogsbad och ceremonier skapar vi
          tillsammans ett tryggt space där du får släppa prestation, mjukna och
          lyssna inåt."
      />
      <Paragraph
        text="Det här är inte ännu en helg där du ska utvecklas eller fixa dig
          själv."
      />
      <Paragraph
        text="Det är en inbjudan att andas djupare, känna mer och komma hem till den
          du redan är."
      />
    </motion.section>
  );
}

export default EventForYou;
