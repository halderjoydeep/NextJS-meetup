import { useRouter } from 'next/router';
import { EventList } from '../../components/events';
import Layout from '../../components/ui/Layout';
import { getFilteredEvents } from '../../utils/dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Layout title="Loading...">
        <p className="card error mt-16">Loading ...</p>
      </Layout>
    );
  }

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Layout title="Invalid filter">
        <p className="card error text-center mt-16">
          Invalid Filter. Please check again.
        </p>
      </Layout>
    );
  }

  const filteredEvents = getFilteredEvents({ year, month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Layout title="Oops! No event">
        <p className="card error mt-16">No events found.</p>
      </Layout>
    );
  }

  const date = new Date(year, month - 1);
  const formattedDate = date.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Layout title="Filtered Events">
      <h1 className="max-w-2xl w-[90%] mx-auto card bg-white text-2xl font-bold text-center mt-8">
        Events in {formattedDate}
      </h1>
      <EventList events={filteredEvents} />
    </Layout>
  );
}
