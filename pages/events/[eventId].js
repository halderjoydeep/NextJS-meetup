import { useRouter } from 'next/router';
import { Layout } from '../../components/ui';
import { getEventById } from '../../utils/dummy-data';

export default function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);
  return <Layout title={event.title}></Layout>;
}
