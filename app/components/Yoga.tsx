import React from 'react';

import Button from './Button';
import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type YogaProps = {
  data: YogaData;
};

export type YogaData = {
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
  yogaAdvantage: {
    title: string;
    information: string;
    advantage: Array<{
      id: string;
      information: string;
      title?: string;
      image: {
        alt: string;
        url: string;
      };
    }>;
  }[];
};

function Yoga({ data }: YogaProps) {
  return (
    <section className={`max-w-[1800] flex flex-col justify-center`}>
      <InfoSection data={data} />
      <AdvantageSection data={data.yogaAdvantage[0]} />
      <div className="flex justify-center mt-10 space-x-4">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </section>
  );
}

export default Yoga;
