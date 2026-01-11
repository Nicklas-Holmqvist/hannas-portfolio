'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LinkedIn from '../icons/LinkedIn';
import Instagram from '../icons/Instagram';
import { fadeIn } from '../transitions/allTransitions';
import MobileMenu from './MobilMenu';
import { navList } from './LandingPageLayout';
import HamburgerButton from './HamburgerButton';
import { useMediaQuery } from 'react-responsive';

type HeaderProps = {
  socialMedia: socialMediaData[];
};

export type socialMediaData = {
  url: string;
  svg: string;
  alt: string;
  imageSize: number;
};

function Header({ socialMedia }: HeaderProps) {
  const [drawer, setDrawer] = useState(false);

  const mobileView = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    mobileView ? setDrawer(false) : null;
  }, [mobileView]);

  const color = 'var(--primary-color)';

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fadeIn}
      className="flex flex-row items-center justify-center xl:justify-between h-[7rem] px-10 fixed w-full z-50 bg-linear-to-b from-(--light-color) from-70% to-transparent">
      {!mobileView && (
        <HamburgerButton toggleDrawer={handleDrawerToggle} active={drawer} />
      )}
      <h1
        className={`text-2xl md:text-4xl xs:text-3xl pb-4`}
        onClick={() => window.scrollTo(0, 0)}>
        Growth mindset and soul
      </h1>
      <AnimatePresence>
        {drawer ? (
          <motion.div
            key="mobileMenu"
            initial={{
              left: '-100%',
              opacity: 0,
            }}
            animate={{ left: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{
              left: '-100%',
              opacity: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            className="mobile-menu absolute fixed top-0 left-0 w-full h-full bg-primary text-light z-10 flex items-center justify-center">
            <MobileMenu
              drawer={drawer}
              toggleDrawer={handleDrawerToggle}
              navList={navList}
              socialMedia={socialMedia}
            />
          </motion.div>
        ) : (
          <nav className="hidden xl:flex ml-4 pb-4">
            <ul className="flex items-center space-x-6">
              {navList.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[1.3rem] hover:border-b-2 transition-border duration-50 ease-in-out">
                    {item.label}
                  </a>
                </li>
              ))}
              {socialMedia.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.alt === 'Instagram' ? (
                      <Instagram color={color} />
                    ) : (
                      <LinkedIn color={color} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
