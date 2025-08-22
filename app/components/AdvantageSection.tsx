import React from 'react';
import Image from 'next/image';

type InfoSectionProps = {
  data: Data;
};

type Data = {
  title: string;
  advantage: Array<{
    id: string;
    image: {
      url: string;
    };
    title?: string;
    information: string;
  }>;
};

type AdvantageProps = {
  id: string;
  image: {
    url: string;
  };
  title?: string;
  information: string;
};

function AdvantageSection({ data }: InfoSectionProps) {
  return (
    <article className="max-w-[900px] w-full flex flex-col items-center justify-center basis-2/3">
      <h3 className="text-center pb-10">{data.title}</h3>
      <ul className="text-center">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-10 xl:gap-28">
          {data.advantage.map((item: AdvantageProps) => (
            <li
              key={item.id}
              className="flex flex-col items-center w-full md:w-1/2 xl:1/3">
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
