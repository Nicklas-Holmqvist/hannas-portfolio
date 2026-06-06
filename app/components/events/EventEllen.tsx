'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Paragraph from './Paragraph';

function EventEllen() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 m-0 p-0`}>
      <div className="relative width-full h-[50vh] ">
        <Image
          src="/ellen.webp"
          fill
          className="object-cover"
          alt="Growth mindset and soul hero image"
        />
        <h2 className="absolute top-[40%] left-[70%] md:top-[40%] md:left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-white">
          Möt Ellen Cämpe
        </h2>
      </div>
      <div className="pb-12 pt-20 px-4">
        <Paragraph
          text="Ellen är co-creator av retreatet och ansvarar för att skapa det
            yttre och inre space som gör att du kan landa, känna dig trygg och
            bli omhändertagen under helgen."
        />
        <Paragraph
          text="Hon är utbildad socionom med över tio års erfarenhet av att möta och
            stötta människor i olika livssituationer, inom socialtjänsten, som
            skolkurator, ungdomscoach och värnpliktskonsulent inom
            Försvarsmakten."
        />
        <Paragraph
          text="Idag arbetar hon som trygg guide, mentor och medmänniska genom
            stödjande och coachande samtal, meditation, reiki healing och
            spaceholding med fokus på återhämtning, självkärlek och inre
            läkning."
        />
        <Paragraph
          text="Hennes arbete vilar på både professionell kompetens och egen
            livserfarenhet. Efter att själv ha gått igenom trauma, utmattning
            och en lång resa tillbaka till sig själv vet Ellen hur viktigt det
            är att få bli hållen i ett tryggt sammanhang där man inte behöver
            bära allt ensam."
        />
        <Paragraph
          text="Med sin lugna närvaro, mjuka guidning och förmåga att skapa trygghet
            hjälper hon människor att sakta ner, känna inåt och återknyta
            kontakten med kroppen, känslorna och den egna inre rösten."
        />
        <Paragraph
          text="Hennes intention är att skapa ett space där du får känna dig sedd,
            hållen och trygg nog att mjukna."
        />
      </div>
    </motion.section>
  );
}

export default EventEllen;
