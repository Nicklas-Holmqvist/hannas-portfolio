import React from 'react';

import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type ContentContainerProps = {
  reverse: boolean;
};

function ContentContainer({ reverse }: ContentContainerProps) {
  const rowDirection = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <section className={`max-w-[1800] w-full flex flex-col ${rowDirection}`}>
      <InfoSection />
      <AdvantageSection />
    </section>
  );
}

export default ContentContainer;
