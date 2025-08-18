import React from 'react';

import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';
import Button from './Button';

type ContentContainerProps = {
  data?: any;
};

function ContentContainer({ data }: ContentContainerProps) {
  return (
    <section className={`max-w-[1800] flex flex-col justify-center`}>
      <InfoSection data={data} />
      <AdvantageSection data={data.reikiAdvantage[0]} />
      <div className="flex justify-center mt-10 space-x-4">
        <Button type="primary" label={data.buttonText} url={data.buttonLink} />
      </div>
    </section>
  );
}

export default ContentContainer;
