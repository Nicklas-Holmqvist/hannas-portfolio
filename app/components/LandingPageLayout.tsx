import React from 'react';

import Hero from './Hero';
import About from './About';
import Footer from './Footer';
import MyJourney from './MyJourney';
import ContentContainer from './ContentContainer';

function LandingPageLayout() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <MyJourney />
      <ContentContainer reverse={false} />
      <ContentContainer reverse={true} />
      <About />
      <Footer />
    </div>
  );
}

export default LandingPageLayout;
