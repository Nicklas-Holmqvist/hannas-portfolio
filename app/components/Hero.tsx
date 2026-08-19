import React from 'react';
import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div className="h-[90vh] w-full">
      <Image
        src="/hero_summer.jpg"
        fill
        className="object-cover"
        alt="Growth mindset and soul hero image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="hero-container pt-40 text-center">
          <h1 className="text-white text-3xl md:text-4xl mb-12">
            Längtar du efter en nystart?
          </h1>
          <Button
            type="secondary"
            label="Discovery call"
            url={
              'https://www.bokadirekt.se/boka-tjanst/hanna-klang-growthmindsetandsoul-130907/mentorskap-discovery-call-kostnadsfrit-3501701'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
