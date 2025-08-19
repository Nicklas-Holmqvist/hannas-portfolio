import React from 'react';
import ReactMarkdown from 'react-markdown';

type MyJourneyProps = {
  data: MyJourneyData;
};

export type MyJourneyData = {
  title: string;
  information: string;
};
function MyJourney({ data }: MyJourneyProps) {
  return (
    <section className="max-w-[1800]">
      <h2 className="text-center">{data.title}</h2>
      <div className="text-center max-w-2xl">
        <ReactMarkdown>{data.information}</ReactMarkdown>
      </div>
    </section>
  );
}

export default MyJourney;
