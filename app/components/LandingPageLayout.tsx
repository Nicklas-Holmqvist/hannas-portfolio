import React from 'react';

import Hero from './Hero';
import Lines from './Lines';
import Yoga, { YogaData } from './Yoga';
import Reiki, { ReikiData } from './Reiki';
import MyJourney, { MyJourneyData } from './MyJourney';

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
    <div className=" markdown">
      <Hero />
      <div className="flex flex-col items-center py-[6rem]">
        <MyJourney data={allAbouts[1]} />
        <Lines />
        <Reiki data={reiki} />
        <Lines />
        <Yoga data={yoga} />
        <Lines />
        <MyJourney data={allAbouts[0]} />
      </div>
    </div>
  );
}

export default LandingPageLayout;
