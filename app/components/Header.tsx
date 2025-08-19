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

  const navList = [
    { href: '#journey', label: 'Min resa' },
    { href: '#reiki', label: 'Reiki healing' },
    { href: '#yoga', label: 'Meditativ Yoga' },
    { href: '#about', label: 'Mitt företag' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeIn}
      className="flex flex-row items-center justify-center xl:justify-between xl:px-20 pt-4 pb-6 md:pt-6 md:pb-10 fixed w-full z-50 bg-linear-to-b from-(--light-color) from-75% to-transparent">
      {/* {starIcon} */}
      <h1
        className="text-3xl md:text-4xl px-6"
        onClick={() => window.scrollTo(0, 0)}>
        Growth mindset and soul
      </h1>
      <div>
        <nav className="hidden xl:flex ml-4">
          <ul className="flex space-x-6">
            {navList.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[1.3rem] hover:border-b-2 transition-border duration-50 ease-in-out">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div></div>
      </div>
      {/* {starIcon} */}
    </motion.header>
  );
}

export default Header;
