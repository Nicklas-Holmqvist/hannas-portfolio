'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Paragraph from './Paragraph';

function EventHanna() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 m-0 p-0 pt-8`}>
      <div className="relative width-full h-[50vh] m-0 p-0">
        <Image
          src="/hanna.webp"
          fill
          className="object-cover"
          alt="Growth mindset and soul hero image"
        />
        <h2 className="absolute top-[40%] left-[70%] md:top-[55%] md:left-[65%] transform -translate-x-1/2 -translate-y-1/2 text-white">
          Möt Hanna Klang
        </h2>
      </div>
      <div className="pb-12 pt-20 px-4">
        <Paragraph
          text="Hanna är skaparen bakom Mod att mjukna och håller den största delen
            av retreatets praktiker, workshops och ceremonier."
        />
        <Paragraph
          text="Hon arbetar som coach, healer och spaceholder med fokus på att
            hjälpa människor bryta gamla mönster, släppa stress och hitta
            tillbaka till sig själva."
        />
        <Paragraph
          text="Med egen erfarenhet av utmattning och duktig-flicka-syndrom
            kombinerar hon djup förståelse med kunskap om nervsystemet, kroppen
            och hur rörelse kan hjälpa oss att bearbeta känslor och blockeringar
            som fastnat inom oss."
        />
        <Paragraph
          text="Hon är utbildad fritidsledare och förskollärare och har lång
            erfarenhet av att handleda och stötta människor i utveckling. Hanna
            är utbildad coach, reiki healer, yogalärare och dansinstruktör med
            vidareutbildning inom grupputveckling och ledarskap."
        />
        <Paragraph
          text="I sitt arbete använder hon verktyg som coaching, dans, yoga,
            meditation och reiki för att hjälpa människor att komma ur huvudet
            och tillbaka ner i kroppen."
        />
        <Paragraph
          text="Hanna håller ett varmt, tryggt och energifyllt space där du får
            utforska dig själv utan krav eller prestation, ett steg i taget."
        />
      </div>
    </motion.section>
  );
}

export default EventHanna;
