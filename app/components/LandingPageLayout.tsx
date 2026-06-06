import React from 'react';

import Hero from './Hero';
import Lines from './Lines';
import Newsletter from './Newsletter';
import Reiki, { ReikiData } from './Reiki';
import Dance, { DanceData } from './Dance';
import Coaching, { CoachingData } from './Coaching';
import MyJourney, { MyJourneyData } from './MyJourney';
import CommentSection, { CommentData } from './CommentSection';

export const navList = [
  {
    href: 'https://www.bokadirekt.se/places/hanna-klang-growthmindsetandsoul-130907',
    label: 'Boka direkt',
  },
  { href: '/retreat', label: 'Event' },
  { href: '/#journey', label: 'Min resa' },
  { href: '/#coaching', label: 'Coaching' },
  { href: '/#dance', label: 'Dans' },
  { href: '/#reiki', label: 'Reiki healing' },
];

type DataProps = {
  data: {
    coaching: CoachingData;
    reiki: ReikiData;
    dance: DanceData;
    allAbouts: MyJourneyData;
    allComments: CommentData;
  };
};

function LandingPageLayout({ data }: DataProps) {
  const { coaching, reiki, dance, allAbouts, allComments } = data;
  return (
    <div className="markdown">
      <Hero />
      <div className="flex flex-col items-center py-[6rem]">
        <MyJourney data={allAbouts} />
        <Lines />
        <Coaching data={coaching} />
        <Lines />
        <Dance data={dance} />
        <Lines />
        <Reiki data={reiki} />
        <CommentSection data={allComments} />
        <Lines />
        <Newsletter />
      </div>
    </div>
  );
}

export default LandingPageLayout;
