import React from 'react';

import Hero from './Hero';
import MyJourney from './MyJourney';
import Reiki from './Reiki';
import Yoga from './Yoga';

//eslint-disable-line
type DataProps = { data: any };

function LandingPageLayout({ data }: DataProps) {
  const { reiki, yoga, allAbouts, footer } = data;
  return (
    <div className="flex flex-col items-center markdown">
      <Hero />
      <MyJourney data={allAbouts[1]} />
      <Reiki data={reiki} />
      <Yoga data={yoga} />
      <MyJourney data={allAbouts[0]} />
    </div>
  );
}

export default LandingPageLayout;
