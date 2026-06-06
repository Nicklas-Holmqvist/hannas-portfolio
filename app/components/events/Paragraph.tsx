import React from 'react';

type ParagraphProps = {
  text: string;
};

function Paragraph({ text }: ParagraphProps) {
  return <p className="max-w-[70ch] mx-auto pb-8">{text}</p>;
}

export default Paragraph;
