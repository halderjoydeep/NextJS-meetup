import { EventList, EventSearch } from '../../components/events';
import Layout from '../../components/ui/Layout';
import { getAllEvents } from '../../utils/api-util';

export default function AllEventsPage({ events }) {
  return (
    <Layout title="All events">
      <EventSearch />
      <EventList events={events} />
    </Layout>
  );
}

export async function getStaticProps() {
  return getAllEvents().then((events) => ({
    props: { events },
    revalidate: 1800,
  }));
}
