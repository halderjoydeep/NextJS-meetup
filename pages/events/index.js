import { EventList } from '../../components/events';
import Layout from '../../components/ui/Layout';
import { getAllEvents } from '../../utils/dummy-data';

export default function AllEventsPage() {
  const allEvents = getAllEvents();
  return (
    <Layout title="All events">
      <EventList events={allEvents} />
    </Layout>
  );
}
