import { datoRequest } from '@/lib/datocms';
import ThemeToggle from './theme/ThemeToggle';
import { notFound } from 'next/navigation';

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
  console.log(data);
  return (
    <div className="">
      <h1>{data.allLandingpages[0].title}</h1>
      <ThemeToggle />
    </div>
  );
}
export default Home;
