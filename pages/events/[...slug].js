import { useRouter } from 'next/router';
import Layout from '../../components/ui/Layout';
import { getFilteredEvents } from '../../utils/dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query;
  //   console.log(slug[0]);

  //   const filteredEvents = getFilteredEvents({ year, month }) || [];
  return <Layout>{/* <EventList /> */}</Layout>;
}
