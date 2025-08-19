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
    <motion.nav
      initial={{ left: '-100%' }}
      animate={{ left: 0 }}
      className="mobile-menu absolute fixed top-0 left-0 w-full h-full bg-primary text-light z-10 flex items-center justify-center">
      <ul className="flex flex-col space-x-6">
        {navList.map((item) => (
          <li key={item.href} onClick={() => toggleDrawer(false)}>
            <a
              href={item.href}
              className="text-[2rem] hover:border-b-2 transition-border duration-50 ease-in-out">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default MobileMenu;
