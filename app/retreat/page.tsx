import Lines from '../components/Lines';

import EventHero from '../components/events/EventHero';
import EventHanna from '../components/events/EventHanna';
import EventPrice from '../components/events/EventPrice';
import EventEllen from '../components/events/EventEllen';
import EventImages from '../components/events/EventImages';
import EventForYou from '../components/events/EventForYou';
import EventPremier from '../components/events/EventPremier';
import EventFitsYou from '../components/events/EventFitsYou';
import EventNotAlone from '../components/events/EventNotAlone';
import EventTogether from '../components/events/EventTogether';
import EventExperience from '../components/events/EventExperience';
import EventNotStrong from '../components/events/EventNotStrong';
import EventTakeWithYou from '../components/events/EventTakeWithYou';
import EventWeHoldEvent from '../components/events/EventWeHoldEvent';

function Retreat() {
  return (
    <main className="text-center">
      <EventHero />
      <EventForYou />
      <Lines />
      <EventExperience />
      <Lines />
      <EventImages />
      <Lines />
      <EventNotStrong />
      <Lines />
      <EventFitsYou />
      <Lines />
      <EventTakeWithYou />
      <Lines />
      <EventWeHoldEvent />
      <Lines />
      <EventHanna />
      <EventEllen />
      <EventTogether />
      <EventPrice />
      <EventPremier />
      <EventNotAlone />
    </main>
  );
}

export default Retreat;
