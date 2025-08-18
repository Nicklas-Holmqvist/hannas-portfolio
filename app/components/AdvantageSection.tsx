import React from 'react';
import Image from 'next/image';

type InfoSectionProps = {
  //eslint-disable-line
  data?: any;
};

function AdvantageSection({ data }: InfoSectionProps) {
  return (
    <article className="max-w-[900px] w-full flex flex-col items-center justify-center basis-2/3">
      <h3 className="text-center">{data.title}</h3>
      <ul className="text-center">
        <div className="flex flex-col xl:flex-row justify-center gap-28">
          {data.advantage.map((item: any) => (
            <li key={item.id} className="flex flex-col items-center">
              <Image
                className="pb-4"
                src={item.image.url}
                alt={''}
                width={75}
                height={75}
              />
              <h4>{item.title}</h4>
              <p>{item.information}</p>
            </li>
          ))}
        </div>
      </ul>
    </article>
  );
}

export default AdvantageSection;
