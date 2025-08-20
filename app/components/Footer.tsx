import Markdown from 'react-markdown';

import ImageLogo from './ImageLogo';

type FooterProps = {
  data: FooterData;
};

export type FooterData = {
  busniessname: string;
  phone: number;
  email: string;
  instagramLink: string;
  linkedinLink: string;
  address: string;
  title: string;
  instagramLogo: {
    alt: string;
    url: string;
  };
  linkedinLogo: {
    alt: string;
    url: string;
  };
};

function Footer({ data }: FooterProps) {
  const socialMediaLinks = [
    {
      url: data.instagramLink,
      imageUrl: data.instagramLogo.url,
      imageAlt: data.instagramLogo.alt,
      imageSize: 25,
    },
    {
      url: data.linkedinLink,
      imageUrl: data.linkedinLogo.url,
      imageAlt: data.linkedinLogo.alt,
      imageSize: 25,
    },
  ];

  const date = new Date();

  return (
    <footer className="text-center text-light bg-primary w-full py-[6rem]">
      <h2>{data.title}</h2>
      <h3>{data.busniessname}</h3>
      <p className="py-1">
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </p>
      <p className="pt-1 pb-6">
        <a href={`tel:${data.phone}`}>{data.phone}</a>
      </p>
      <address>
        <Markdown>{data.address}</Markdown>
      </address>
      <div className="flex justify-center items-center gap-8 pt-10">
        {socialMediaLinks.map((items, index) => (
          <a key={index} href={items.url} target="_blank">
            <ImageLogo
              url={items.imageUrl}
              alt={items.imageAlt}
              imageSize={items.imageSize}
            />
          </a>
        ))}
      </div>
      <p className="pt-10 text-xs md:text-lg">
        Copyright &copy; | {date.getFullYear()} - Hanna Klang - All rights
        reserved
      </p>
    </footer>
  );
}

export default Footer;
