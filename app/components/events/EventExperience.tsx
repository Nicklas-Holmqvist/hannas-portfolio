'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

import Cards from './Cards';

const EventCard = [
  {
    title: 'Yoga & meditation',
    description:
      'Mjuk yoga och guidade meditationer för att landa i kroppen och stilla nervsystemet.',
  },
  {
    title: 'Eldceremoni',
    description:
      'En ceremoni för att släppa taget om det du inte längre vill bära.',
  },
  {
    title: 'Cacao ceremoni',
    description:
      'En mjuk stund för intentioner, närvaro och kontakt med hjärtat.',
  },
  {
    title: 'Dans meditativ rörelse',
    description:
      'Frigörande rörelse för att komma ur huvudet och tillbaka till kroppen.',
  },
  {
    title: 'Skogsbad & gående meditation',
    description: 'Långsamma promenader och närvaro i naturen.',
  },
  {
    title: 'Vila, reflektion & mjuk gemenskap',
    description:
      'Tid att lyssna inåt och möta det som vill få ta plats. Ett tryggt space för vila, närvaro och återhämtning.',
  },
];

function EventExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      ref={ref}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out scroll-mt-24 pt-8 max-w-[1280px] mx-auto`}>
      <h2 className="text-3xl md:text-4xl">Du kommer att få uppleva</h2>
      <article className="grid grid-cols-1 xl:grid-cols-3 gap-16 ">
        {EventCard.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </article>
    </motion.section>
  );
}

export default EventExperience;
