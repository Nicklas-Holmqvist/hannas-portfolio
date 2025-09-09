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
      <article className="max-w-[900px] w-full flex justify-center flex-col items-center">
        <h2 className="text-center">Personlig coach</h2>
        <p className="text-center max-w-2xl pb-6">
          Jag går just nu en ettårig coaching utbildning hos Johanna Halldén.
          Jag söker just nu 5st övningsklienter till ett reducerat pris.
        </p>
        <p className="text-center max-w-2xl pb-6">
          Jag har tidigare i min pedagogiska yrkesroll handlett både kollegor
          och studenter i flera år. Har även gått en UGL – utveckling grupp och
          ledarskapsutbildning via Försvarsmakten.
        </p>
        <p className="text-center max-w-2xl pb-6">
          Men en fråga som du kanske ställer dig. Vad gör en coach? En coach är
          en person som hjälper dig som individ och/eller ett team att, både
          professionellt och personligt, utvecklas, utforma sina liv och nå sina
          mål.
        </p>
        <p className="text-center max-w-2xl pb-6">
          Att anlita en coach har blivit alltmer populärt och coachning används
          idag av både privatpersoner och människor i företagsvärlden. Coachen
          kan spela en avgörande roll i att göra klienten framgångsrik och
          utvecklas samt öka förmågan att hantera förändringar och skapa ny
          mening i livet.
        </p>
        <p>Men är det något för dig?</p>
        <p className="text-center max-w-2xl pb-6">
          Då har jag en fråga till dig, känner du det där pirret ibland eller
          har du en längtan efter något mer? Vad skulle du säga om jag sa att
          det var möjligt att uppnå nu!
        </p>
        <p className="text-center max-w-2xl pb-6">
          Tillsammans tittar vi på vad du drömmer om? Vad du står i livet nu?
          Vad du längtar efter? Vilka programmeringar du har? Och hur du kan
          konkret kan nå det! Tillsammans med mig och min erfarenhet får du
          verktygen att komma närmare dem.
        </p>
        <p className="text-center max-w-2xl pb-6">Känner du dig kallad?</p>
        <p className="text-center max-w-2xl pb-6">
          Coaching utförs på telefon eller via videosamtal.
        </p>
        <p className="text-center max-w-2xl font-bold">
          Investering i dig själv: Coaching 10 tillfällen 4000kr.
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
