import React from 'react';

import Hero from './Hero';
import MyJourney, { MyJourneyData } from './MyJourney';
import Reiki, { ReikiData } from './Reiki';
import Yoga, { YogaData } from './Yoga';

type DataProps = {
  data: {
    reiki: ReikiData;
    yoga: YogaData;
    allAbouts: MyJourneyData[];
  };
};

function LandingPageLayout({ data }: DataProps) {
  const { reiki, yoga, allAbouts } = data;
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
