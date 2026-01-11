import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div className="width-full h-[90vh]">
      <Image
        src="/hero.jpg"
        fill
        className="object-cover"
        alt="Growth mindset and soul hero image"
      />
    </div>
  );
}

export default Hero;
