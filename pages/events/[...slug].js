import { EventList } from '../../components/events';
import Layout from '../../components/ui/Layout';
import { getFilteredEvents } from '../../utils/api-util';

export default function FilteredEventsPage({ events, hasError, date }) {
  if (hasError) {
    return (
      <Layout title="Invalid filter">
        <p className="card error text-center mt-16">
          Invalid Filter. Please check again.
        </p>
      </Layout>
    );
  }

  if (events.length === 0) {
    return (
      <Layout title="Oops! No event" description={`events in ${date}`}>
        <p className="card error mt-16">No events found.</p>
      </Layout>
    );
  }

  return (
    <Layout title="Filtered Events" description={`events in ${date}`}>
      <h1 className="max-w-2xl w-[90%] mx-auto card bg-white text-2xl font-bold text-center mt-8">
        Events in {date}
      </h1>
      <EventList events={events} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const year = +slug[0];
  const month = +slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const events = await getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);
  const formattedDate = date.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });

  return {
    props: {
      events,
      date: formattedDate,
    },
  };
}
