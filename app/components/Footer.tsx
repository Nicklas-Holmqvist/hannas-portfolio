import Markdown from 'react-markdown';

import LinkedIn from '../icons/LinkedIn';
import Instagram from '../icons/Instagram';
import { navList } from './LandingPageLayout';
import { socialMediaData } from './Header';

type FooterProps = {
  data: FooterData;
  socialMedia: socialMediaData[];
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

const color = 'var(--light-color)';

function Footer({ data, socialMedia }: FooterProps) {
  const date = new Date();

  return (
    <footer className="text-center text-light bg-primary w-full py-[6rem]">
      <nav className="flex ml-4 pb-16 justify-center">
        <ul className="flex flex-col xl:flex-row items-center xl:space-x-6">
          {navList.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[1.3rem] hover:border-b-2 transition-border duration-50 ease-in-out">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
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
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer">
            {item.alt === 'Instagram' ? (
              <Instagram color={color} />
            ) : (
              <LinkedIn color={color} />
            )}
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
