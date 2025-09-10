'use client';

import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';
import Button from './Button';

function Coaching() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.section
      id="coaching"
      ref={ref}
      className={`max-w-[1800] scroll-mt-24 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <article className="max-w-[900px] w-full flex justify-center flex-col items-center text-center">
        <h2 className="">Personlig coach</h2>
        <p className="max-w-2xl pb-6 font-bold">
          Vill du ta nästa steg i livet – personligt eller professionellt?
        </p>
        <p className="max-w-2xl pb-6">
          Just nu går jag en ettårig coachutbildning hos Johanna Halldén, och
          söker fem övningsklienter till ett reducerat pris.
        </p>
        <p className="max-w-2xl pb-6">
          Jag har en lång bakgrund inom det pedagogiska fältet, där jag under
          flera år handlett både kollegor och studenter. Jag har också gått UGL
          – en utvecklings- och ledarskapsutbildning genom Försvarsmakten och
          arbetat med både individer och grupper.
        </p>
        <p className="max-w-2xl pb-6">
          Men vad <b>är</b> coaching egentligen?
        </p>
        <p className="max-w-2xl pb-6">
          En coach hjälper dig – som individ eller i team – att utvecklas,
          tydliggöra mål och skapa förändring. Coaching är ett kraftfullt
          verktyg för att nå dit du längtar, oavsett om det handlar om karriär,
          relationer eller personlig utveckling. Det handlar om att få syn på
          vad som håller dig tillbaka och vad som kan ta dig framåt.
        </p>
        <p className="max-w-2xl pb-6 font-bold">
          Kanske känner du igen dig i något av detta:
        </p>
        <ul className="pb-6">
          <li>
            - Du bär på en längtan efter något mer, men vet inte riktigt vad
          </li>
          <li>- Du står inför en förändring, men tvekar kring nästa steg</li>
          <li>- Du vill förstå dina invanda mönster – och bryta dem</li>
          <li>- Du har mål, men tappar fart eller riktning</li>
        </ul>
        <p className="max-w-2xl pb-6">
          Vad skulle hända om du gav dig själv utrymme att utforska det här – på
          riktigt?
        </p>
        <p className="max-w-2xl pb-6 font-bold">Tillsammans utforskar vi:</p>
        <ul className="pb-6">
          <li>- Vad du drömmer om</li>
          <li>- Var du står idag – och vart du vill</li>
          <li>- Vilka inre hinder eller programmeringar som påverkar dig</li>
          <li>- Hur du konkret kan ta steg mot det liv du vill leva</li>
        </ul>
        <p className="max-w-2xl pb-6 font-bold">Du får:</p>
        <ul className="pb-6">
          <li>
            - En trygg samtalspartner med erfarenhet av att stödja utveckling
          </li>
          <li>- Konkreta verktyg och insikter</li>
          <li>- Ett coachande samtalsrum där du står i fokus</li>
        </ul>
        <p className="max-w-2xl pb-6 font-bold">Upplägg:</p>
        <p className="max-w-2xl pb-6">
          10 coachsamtal á ca 60 minuter – via telefon eller videosamtal.
        </p>
        <p className="max-w-2xl pb-6 font-bold">Investering:</p>
        <p className="max-w-2xl pb-6">
          4000 kr för 10 tillfällen (reducerat pris under utbildningstiden).
        </p>
        <p className="max-w-2xl pb-6 font-bold">Känner du dig kallad?:</p>
        <p className="max-w-2xl pb-6">
          Skicka ett meddelande så bokar vi ett första samtal.
        </p>
      </article>
      <div className="text-center pt-8">
        <Button
          type="primary"
          label="Kontakta"
          url="mailto:hanna_klang@outlook.com"
        />
      </div>
    </motion.section>
  );
}

export default Coaching;
