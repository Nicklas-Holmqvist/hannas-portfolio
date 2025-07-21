import { notFound } from 'next/navigation';
import { datoRequest } from '@/lib/datocms';

import Header from './components/Header';
import LandingPageLayout from './components/LandingPageLayout';

type Landingpage = {
  allLandingpages: {
    id: number;
    title: string;
  }[];
};

async function getLandingpage() {
  const query = `query work {
    allLandingpages {
    id
    title
  }
  }`;

  const response = (await datoRequest({
    query: query,
  })) as Landingpage | null;

  if (response === null) return notFound();
  return response;
}
async function Home() {
  const data: Landingpage = await getLandingpage();
  return (
    <div className="">
      <Header />
      <LandingPageLayout />
      <h1>{data.allLandingpages[0].title}</h1>
    </div>
  );
}
export default Home;
