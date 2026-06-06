import React from 'react';
import Image from 'next/image';

type EventImageProps = {
  src: string;
  alt: string;
  key: number;
};

export default function EventImage({ src, alt, key }: EventImageProps) {
  return <Image key={key} src={src} height={750} width={750} alt={alt} />;
}
