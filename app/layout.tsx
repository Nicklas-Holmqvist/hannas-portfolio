import type { Metadata } from 'next';
import { Playfair_Display, Proza_Libre, Parisienne } from 'next/font/google';

import './globals.css';
import ThemeProvider from './theme/theme-provider';

const playfair_display = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const parisienne = Parisienne({
  variable: '--parisienne',
  weight: ['400'],
  subsets: ['latin'],
});

const proza_libre = Proza_Libre({
  variable: '--font-proza-libre',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Hanna Klang | Growthmindsetandsoul | Personlig Coaching, Reiki, Healing & Yoga',
  description:
    'Hanna Klang, growthmindsetandsoul, erbjuder personlig coaching, yoga och healing för inre balans, välmående och personlig utveckling med fokus på kropp, själ och sinne.',
  keywords:
    'Hanna Klang, growthmindsetandsoul personlig coaching, yoga, healing, Reiki, personlig utveckling, inre balans, välmående, meditation, andlig vägledning, holistiskt välmående, stresshantering, mindfulness, energiarbete, chakrabalansering, andlig praktik, kropp och själ, mental hälsa, livscoachning, andlig tillväxt, inre frid',
  authors: [
    {
      name: 'Hanna Klang',
      url: 'https://growthmindsetandsoul.se',
    },
  ],
  openGraph: {
    title:
      'Hanna Klang | Growthmindsetandsoul | Personlig Coaching, Reiki, Healing & Yoga',
    description:
      'Hanna Klang, growthmindsetandsoul, erbjuder personlig coaching, yoga och healing för inre balans, välmående och personlig utveckling med fokus på kropp, själ och sinne.',
    url: 'https://growthmindsetandsoul.se',
    siteName: 'Growthmindsetandsoul',
    images: 'https://growthmindsetandsoul.se/og-image.jpg',
    locale: 'sv_SE',
    type: 'website',
  },
};

const light = 'bg-[#F1EFE3] text-[#2A353D]';
const dark = 'dark:bg-[#2F4157] dark:text-[#FFFFFF]';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair_display.variable} ${proza_libre.variable} ${parisienne.variable} antialiased  ${light} ${dark}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
