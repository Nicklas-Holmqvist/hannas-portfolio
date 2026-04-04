'use client';

import React, { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id="newsletter"
      ref={ref}
      className={`w-full max-w-[700px] scroll-mt-24 mt-12 ${
        isInView ? 'opacity-100' : 'opacity-0'
      } delay-100 transition-opacity duration-500 ease-in-out`}>
      <h3 className="text-center">Prenumerera på mitt nyhetsbrev</h3>
      <form
        method="POST"
        action="https://gansub.com/s/UXhhUbT9Lv14/"
        className="flex w-full">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Skriv in din email"
          className="shadow appearance-none border rounded w-full text-gray-700 mx-2 pl-2 leading-tight focus:outline-none focus:shadow-outline focus:border-[#525949]"
        />
        <input type="hidden" name="gan_repeat_email" />
        <input
          type="submit"
          value="Prenumerera"
          className="bg-primary text-light border-text hover:bg-light hover:text-primary hover:border-primary cursor-pointer border rounded transition border-2 border-secondary text-center px-12 py-3"
        />
      </form>
      <p className="pl-2 pt-3">
        <b>Vill du uppleva mer energi, rörelse och riktning?</b> Signa upp för
        mitt nyhetsbrev och få inspiration, tips och erbjudanden direkt i din
        inkorg.
      </p>
    </motion.section>
  );
}

export default Newsletter;
