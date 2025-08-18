import React from 'react';
import ReactMarkdown from 'react-markdown';

const onClick = (url: string) => {
  alert(url);
};

type InfoSectionProps = {
  data: Data;
};

type Data = {
  title: string;
  information: string;
  secondTitle?: string;
  secondInformation?: string;
};

function InfoSection({ data }: InfoSectionProps) {
  const secondaryContent = data.secondTitle ? (
    <div className="mt-16">
      <h3 className="text-center">{data.secondTitle}</h3>
      <p className="text-center max-w-2xl">
        <ReactMarkdown>{data.secondInformation}</ReactMarkdown>
      </p>
    </div>
  ) : null;

  return (
    <article className="max-w-[900px] w-full flex justify-center flex-col items-center">
      <h2 className="text-center">{data.title}</h2>
      <p className="text-center max-w-2xl">
        <ReactMarkdown>{data.information}</ReactMarkdown>
      </p>
      {secondaryContent}
    </article>
  );
}

export default InfoSection;
