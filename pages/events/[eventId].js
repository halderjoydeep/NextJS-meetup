import { useRouter } from 'next/router';
import { EventLogistics, EventSummary } from '../../components/event-details';
import EventContent from '../../components/event-details/EventContent';
import { Layout } from '../../components/ui';
import { getEventById } from '../../utils/dummy-data';

export default function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);
  if (!event) {
    return (
      <Layout title="Error">
        <p className="card error mt-16">No events found</p>
      </Layout>
    );
  }

  return (
    <Layout title={event.title}>
      <EventSummary />
      <EventLogistics
        image={event.image}
        title={event.title}
        date={event.date}
        address={event.location}
      />
      <EventContent description={event.description} />
    </Layout>
  );
}
