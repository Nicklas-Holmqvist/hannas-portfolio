import React from 'react';
import Image from 'next/image';
import ThemeToggle from '../theme/ThemeToggle';

type HeaderProps = {
  url: string;
};

function Header(url: HeaderProps) {
  const imageSize = 35;

  const starIcon = (
    <Image
      className="pb-2"
      src={url.url}
      alt={''}
      width={imageSize}
      height={imageSize}
    />
  );

  return (
    <nav className="flex flex-row items-center justify-center pt-4 pb-6 fixed top-0 w-full z-50 bg-linear-to-b from-(--light-color) from-75% to-transparent">
      {starIcon}
      <h1 className="px-6">Growth mindset and soul</h1>
      {starIcon}

      {/* <ThemeToggle /> */}
    </nav>
  );
}

export default Header;
