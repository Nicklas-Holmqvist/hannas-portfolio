'use client';

import { ReactSVG } from 'react-svg';
import Instagram from '../icons/Instagram';

type SVGComponentProps = {
  svg: string;
  alt: string;
  imageSize: number;
  color: string;
};

function SVGComponent({ svg, imageSize, color }: SVGComponentProps) {
  return (
    <>
      <Instagram color={'--var(primary-color)'} />
      {/* <ReactSVG
        src="/insta.svg"
        className="ml-6 w-10 h-10 cursor-pointer pt-2"
        style={{ stroke: 'var(--primary-color)' }}
      /> */}
      <ReactSVG
        src={svg}
        xmlns="http://www.w3.org/2000/svg"
        className={`w-${imageSize} h-${imageSize} svg cursor-pointer`}
        style={{ stroke: color }}
      />
    </>
  );
}

export default SVGComponent;
