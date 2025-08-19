'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeIn } from '../transitions/allTransitions';

type HeaderProps = {
  url: string;
};

function Header(url: HeaderProps) {
  const imageSize = 35;

  const starIcon = (
    <Image
      className="pb-2 hidden md:block"
      src={url.url}
      alt={''}
      width={imageSize}
      height={imageSize}
    />
  );

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeIn}
      className="flex flex-row items-center justify-center pt-4 pb-6 md:pt-6 md:pb-10 fixed top-0 w-full z-50 bg-linear-to-b from-(--light-color) from-75% to-transparent">
      {starIcon}
      <h1 className="text-3xl md:text-4xl px-6">Growth mindset and soul</h1>
      {starIcon}
    </motion.nav>
  );
}

export default Header;
