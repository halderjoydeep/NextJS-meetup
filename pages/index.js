import { EventList } from '../components/events';
import NewsLetter from '../components/input/NewsLetter';
import Layout from '../components/ui/Layout';
import { getFeaturedEvents } from '../utils/api-util';

export default function HomePage({ events }) {
  return (
    <Layout title="Events">
      <NewsLetter />
      <EventList events={events} />
    </Layout>
  );
}

export async function getStaticProps() {
  return getFeaturedEvents().then((events) => ({
    props: { events },
    revalidate: 1800,
  }));
}
