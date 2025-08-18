import React from 'react';
import ReactMarkdown from 'react-markdown';

type MyJourneyProps = {
  //eslint-disable-line
  data: any;
};

function MyJourney({ data }: MyJourneyProps) {
  return (
    <section className="max-w-[1800] mt-10">
      <h2 className="text-center">{data.title}</h2>
      <p className="text-center max-w-2xl">
        <ReactMarkdown>{data.information}</ReactMarkdown>
      </p>
    </section>
  );
}

export default MyJourney;
