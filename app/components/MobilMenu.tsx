'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

type MobileMenuProps = {
  drawer: boolean;
  toggleDrawer: (value: boolean) => void;
  navList: Array<{ href: string; label: string }>;
};

function MobileMenu({ toggleDrawer, navList }: MobileMenuProps) {
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
      </ul>
    </nav>
  );
}

export default MobileMenu;
