'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Button from './Button';
import Paragraph from './events/Paragraph';

function EventSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id="events"
      ref={ref}
      className={`max-w-[1800] ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <h2 className="text-center mt-6">Mod att Mjukna</h2>
      <Image
        src="/hanna_ellen.jpg"
        width={900}
        height={578}
        className="object-cover"
        alt="Hanna och Ellen i skogen"
      />
      <div className="text-center max-w-2xl mx-auto pt-12">
        <Paragraph text="Ett retreat för kvinnor som längtar efter att sakta ner, landa i kroppen och återknyta kontakten med hela sig själva." />
        <Paragraph text=" Mod att mjukna är skapat av Hanna Klang tillsammans med Ellen Cämpe, två kvinnor med lång erfarenhet av att guida människor genom förändring, återhämtning och personlig utveckling, både professionellt och genom egna livsresor." />
        <Paragraph text="Tillsammans delar vi en vision om att skapa trygga rum där kvinnor får släppa prestation, landa i kroppen och hitta tillbaka till sig själva." />
      </div>
      <div className="text-center pt-8">
        <Button label="Läs mer om retreatet" url="/retreat" type="primary" />
      </div>
    </motion.section>
  );
}

export default EventSection;
