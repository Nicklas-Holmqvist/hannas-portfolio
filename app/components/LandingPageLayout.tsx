import React from 'react';

import Hero from './Hero';
import Lines from './Lines';
import Yoga, { YogaData } from './Yoga';
import { socialMediaData } from './Header';
import Reiki, { ReikiData } from './Reiki';
import Dance, { DanceData } from './Dance';
import Footer, { FooterData } from './Footer';
import Coaching, { CoachingData } from './Coaching';
import MyJourney, { MyJourneyData } from './MyJourney';
import CommentSection, { CommentData } from './CommentSection';

export const navList = [
  { href: '#journey', label: 'Min resa' },
  { href: '#coaching', label: 'Coaching' },
  { href: '#reiki', label: 'Reiki healing' },
  { href: '#dance', label: 'Dans' },
  { href: '#yoga', label: 'Meditativ Yoga' },
];

type DataProps = {
  data: {
    coaching: CoachingData;
    reiki: ReikiData;
    dance: DanceData;
    yoga: YogaData;
    allAbouts: MyJourneyData;
    footer: FooterData;
    allComments: CommentData;
  };
  socialMedia: socialMediaData[];
};

function LandingPageLayout({ data, socialMedia }: DataProps) {
  const { coaching, reiki, dance, yoga, allAbouts, allComments, footer } = data;
  return (
    <div className="markdown">
      <Hero />
      <div className="flex flex-col items-center py-[6rem]">
        <MyJourney data={allAbouts} />
        <Lines />
        <Coaching data={coaching} />
        <Lines />
        <Reiki data={reiki} />
        <Lines />
        <Dance data={dance} />
        <Lines />
        <Yoga data={yoga} />
        <Lines />
        <CommentSection data={allComments} />
      </div>
      <Footer data={footer} socialMedia={socialMedia} />
    </div>
  );
}

export default LandingPageLayout;
