import React from 'react';
import ReactMarkdown from 'react-markdown';

type CommentProps = {
  data: CommentData;
};

export type CommentData = {
  id: string;
  service: string;
  comment: string;
  user: string;
};

function CommentSection({ data }: CommentProps) {
  return (
    <article className="w-[250px] align-top pt-[1.5rem]">
      <h4 className="text-center">{data.service}</h4>
      <ReactMarkdown>{data.comment}</ReactMarkdown>
      <p className="italic mt-4 text-right">- {data.user}</p>
    </article>
  );
}

export default CommentSection;
