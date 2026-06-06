import { notFound } from 'next/navigation';
import { datoRequest } from '@/lib/datocms';

import { YogaData } from './components/Yoga';
import { ReikiData } from './components/Reiki';
import { DanceData } from './components/Dance';
import { FooterData } from './components/Footer';
import { CommentData } from './components/CommentSection';
import { CoachingData } from './components/Coaching';
import { MyJourneyData } from './components/MyJourney';
import LandingPageLayout from './components/LandingPageLayout';

export const revalidate = 0;

export async function getLandingpage() {
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
  coaching {
    id
    title
    information
    buttonText
    buttonLink
  }
  dance {
    id
    title
    information
    buttonText
    buttonLink
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
  allComments {
    id
  	service
    comment
  	user}
  footer {
    busniessname
    phone
    email
    instagramLink
    linkedinLink
    address
    title
        instagramLogo {
      alt
      url
    }
    linkedinLogo {
      alt
      url
    }
  }
}`;

  type DataProps = {
    coaching: CoachingData;
    reiki: ReikiData;
    dance: DanceData;
    yoga: YogaData;
    allAbouts: MyJourneyData;
    allComments: CommentData;
    footer: FooterData;
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
      <LandingPageLayout data={data} />
    </div>
  );
}
export default Home;
