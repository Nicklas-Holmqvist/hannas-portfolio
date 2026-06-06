import React from 'react';

type CardsProps = {
  title: string;
  description: string;
  key: number;
};

export default function Cards({ title, description, key }: CardsProps) {
  return (
    <div
      key={key}
      className="h-[12rem]  w-[90%] xl:h-[15rem] xl:w-full mx-auto border border-primary rounded-lg bg-primary  shadow-xl/20">
      <div className="h-full  w-full flex flex-col items-center justify-center text-light">
        <h4 className="font-bold text-lg md:text-3xl">{title}</h4>
        <p className="px-12 text-sm md:text-lg">{description}</p>
      </div>
    </div>
  );
}
