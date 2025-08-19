import Image from 'next/image';

type ImageLogoProps = {
  url: string;
  alt?: string;
  imageSize: number;
};

function ImageLogo({ url, alt, imageSize }: ImageLogoProps) {
  return (
    <Image
      className="pb-2"
      src={url}
      alt="bild"
      width={imageSize}
      height={imageSize}
    />
  );
}

export default ImageLogo;
