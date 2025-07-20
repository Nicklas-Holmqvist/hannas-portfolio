import React from 'react';

import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type ContentContainerProps = {
  reverse: boolean;
};

function ContentContainer({ reverse }: ContentContainerProps) {
  return (
    <section className={`flex flex-row${reverse ? '-reverse' : ''}`}>
      <InfoSection />
      <AdvantageSection />
    </section>
  );
}

export default ContentContainer;
