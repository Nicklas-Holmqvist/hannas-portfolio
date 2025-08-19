'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import MobileMenu from './MobilMenu';
import HamburgerButton from './HamburgerButton';
import { fadeIn } from '../transitions/allTransitions';
import { useMediaQuery } from 'react-responsive';

type HeaderProps = {
  url: string;
};

function Header(url: HeaderProps) {
  const [drawer, setDrawer] = useState(false);

  const mobileView = useMediaQuery({
    query: '(min-width: 1200px)',
  });

  const navList = [
    { href: '#journey', label: 'Min resa' },
    { href: '#reiki', label: 'Reiki healing' },
    { href: '#yoga', label: 'Meditativ Yoga' },
    { href: '#about', label: 'Mitt företag' },
  ];

  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    mobileView ? setDrawer(false) : null;
  }, [mobileView]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeIn}
      className="flex flex-row items-center justify-center xl:justify-between xl:px-20 pt-4 pb-6 md:pt-6 md:pb-10 fixed w-full z-50 bg-linear-to-b from-(--light-color) from-75% to-transparent">
      {!mobileView && (
        <HamburgerButton toggleDrawer={handleDrawerToggle} active={drawer} />
      )}
      <h1
        className={`text-3xl md:text-4xl px-6`}
        onClick={() => window.scrollTo(0, 0)}>
        Growth mindset and soul
      </h1>
      {drawer ? (
        <MobileMenu
          drawer={drawer}
          toggleDrawer={handleDrawerToggle}
          navList={navList}
        />
      ) : (
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
      )}
    </motion.header>
  );
}

export default Header;
