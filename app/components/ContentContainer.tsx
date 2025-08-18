import React from 'react';

import InfoSection from './InfoSection';
import AdvantageSection from './AdvantageSection';

type ContentContainerProps = {
  data?: any;
};

function ContentContainer({ data }: ContentContainerProps) {
  return (
    <section className={`max-w-[1800] flex flex-col justify-center`}>
      <InfoSection data={data.infoContent} />
      <AdvantageSection data={contentData.advantageContent} />
    </section>
  );
}

export default ContentContainer;
