import React from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

type HamburgerButtonProps = { toggleDrawer: () => void; active: boolean };
function HamburgerButton({ toggleDrawer, active }: HamburgerButtonProps) {
  return (
    <button
      aria-label="Toggle menu"
      type="button"
      data-testid="hamburger-button"
      className="fixed left-0 top-0 py-8 md:py-6 px-8 z-20"
      onClick={toggleDrawer}>
      {active ? (
        <LuX size={25} className="stroke-light" />
      ) : (
        <LuMenu size={25} className="stroke-primary" />
      )}
    </button>
  );
}

export default HamburgerButton;
