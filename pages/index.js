import { EventList } from '../components/events';
import Layout from '../components/ui/Layout';
import { getFeaturedEvents } from '../utils/dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <Layout title="Events">
      <EventList events={featuredEvents} />
    </Layout>
  );
}
