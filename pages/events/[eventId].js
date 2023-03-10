import { useRouter } from 'next/router';
import { EventLogistics, EventSummary } from '../../components/event-details';
import EventContent from '../../components/event-details/EventContent';
import { Layout } from '../../components/ui';
import { getFeaturedEvents, getEventById } from '../../utils/api-util';

export default function EventDetailPage({ event }) {
  return (
    <Layout title={event.title} description={event.description}>
      <EventSummary title={event.title} />
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

export async function getStaticProps(context) {
  const { eventId } = context.params;
  return getEventById(eventId).then((event) => {
    if (!event) {
      return {
        notFound: true,
      };
    }
    return {
      props: { event },
      revalidate: 60,
    };
  });
}

export async function getStaticPaths() {
  return getFeaturedEvents().then((events) => ({
    paths: events.map((event) => ({ params: { eventId: event.id } })),
    fallback: 'blocking',
  }));
}
