'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { socialMediaData } from './Header';
import Instagram from '../icons/Instagram';
import LinkedIn from '../icons/LinkedIn';

type MobileMenuProps = {
  drawer: boolean;
  toggleDrawer: (value: boolean) => void;
  navList: Array<{ href: string; label: string }>;
  socialMedia: socialMediaData[];
};

const color = 'var(--light-color)';

function MobileMenu({ toggleDrawer, navList, socialMedia }: MobileMenuProps) {
  return (
    <nav>
      <ul className="flex flex-col space-y-4">
        {navList.map((item) => (
          <motion.li
            initial={{
              marginTop: '-10%',
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.3 },
            }}
            exit={{
              marginTop: '-10%',
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            className="text-center"
            key={item.href}
            onClick={() => toggleDrawer(false)}>
            <a
              href={item.href}
              className="text-[2rem] hover:border-b-2 transition-border duration-50 ease-in-out ">
              {item.label}
            </a>
          </motion.li>
        ))}
        <div className="flex flex-row w-full justify-center items-center gap-8 pt-10">
          {socialMedia.map((item, index) => (
            <motion.li
              initial={{
                marginTop: '-10%',
                opacity: 0,
              }}
              animate={{
                marginTop: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.7 + index * 0.1 },
              }}
              exit={{
                marginTop: '-10%',
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              key={index}
              className="text-center">
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer">
                {item.alt === 'Instagram' ? (
                  <Instagram color={color} />
                ) : (
                  <LinkedIn color={color} />
                )}
              </a>
            </motion.li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default MobileMenu;
