import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

type InfoSectionProps = {
  data: Data;
  image: string;
  imageAlt: string;
};

type Data = {
  title: string;
  information: string;
  secondTitle?: string;
  secondInformation?: string;
};

function InfoSection({ data, image, imageAlt }: InfoSectionProps) {
  const secondaryContent = data.secondTitle ? (
    <div className="pt-10">
      <h3 className="text-center">{data.secondTitle}</h3>
      <div className="text-center max-w-2xl">
        <ReactMarkdown>{data.secondInformation}</ReactMarkdown>
      </div>
    </div>
  ) : null;

  return (
    <article className="max-w-[900px] w-full flex justify-center flex-col items-center">
      <h2 className="text-center">{data.title}</h2>
      <Image
        src={image}
        width={900}
        height={450}
        className="object-cover"
        alt={imageAlt}
      />
      <div className="text-center max-w-2xl pt-10">
        <ReactMarkdown>{data.information}</ReactMarkdown>
      </div>
      {secondaryContent}
    </article>
  );
}

export default InfoSection;
