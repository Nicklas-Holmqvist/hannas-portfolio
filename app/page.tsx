import { notFound } from 'next/navigation';
import { datoRequest } from '@/lib/datocms';

import Header from './components/Header';
import { ReikiData } from './components/Reiki';
import { YogaData } from './components/Yoga';
import { MyJourneyData } from './components/MyJourney';
import LandingPageLayout from './components/LandingPageLayout';

async function getLandingpage() {
  const query = `query work {
  reiki {
    id
    title
    information
    buttonText
    buttonLink
    reikiAdvantage {
      title
      advantage {
        id
        information
        image {
          alt
          filename
          url
        }
      }
    }
  }
  yoga {
    id
    title
    information
    secondTitle
    secondInformation
    buttonText
    buttonLink
    yogaAdvantage{
      title
      advantage{id
      information
      title
      image{alt
      filename
      url}}
    }
  }
  allAbouts {
    title
    information
    id
  }
}`;

  type DataProps = {
    reiki: ReikiData;
    yoga: YogaData;
    allAbouts: MyJourneyData[];
  };

  const response = (await datoRequest({
    query: query,
  })) as DataProps | null;

  if (response === null) return notFound();
  return response;
}
async function Home() {
  const data = await getLandingpage();
  return (
    <div className="">
      <Header url={data.yoga.yogaAdvantage[0].advantage[0].image.url} />
      <LandingPageLayout data={data} />
    </div>
  );
}
export default Home;
