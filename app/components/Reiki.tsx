import React from 'react';

import Button from './Button';
import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type ReikiProps = {
  data: ReikiData;
};

export type ReikiData = {
  title: string;
  information: string;
  buttonText: string;
  buttonLink: string;
  reikiAdvantage: {
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

function Reiki({ data }: ReikiProps) {
  return (
    <section className={`max-w-[1800] flex flex-col justify-center`}>
      <InfoSection data={data} />
      <AdvantageSection data={data.reikiAdvantage[0]} />
      <div className="flex justify-center pt-8 space-x-4">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </section>
  );
}

export default Reiki;
