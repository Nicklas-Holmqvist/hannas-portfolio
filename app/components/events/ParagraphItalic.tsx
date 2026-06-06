import React from 'react';

type ParagraphItalicProps = {
  text: string;
};

function ParagraphItalic({ text }: ParagraphItalicProps) {
  return <p className="italic pb-2">{text}</p>;
}

export default ParagraphItalic;
