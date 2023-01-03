/* eslint-disable @next/next/no-img-element */
import { Button } from '../ui';

export default function EventItem({ event }) {
  const { date, image, location, id, name, title } = event;
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className="card my-4 grid sm:grid-cols-5 gap-8">
      <img
        src={'/' + image}
        alt={name}
        className="sm:col-span-2 object-cover h-[200px] w-full rounded-md"
      />

      <div className="h-full sm:col-span-3 flex flex-col justify-between text-center sm:text-left">
        <div>
          <h2 className="mb-2 text-xl font-bold">{title}</h2>

          <time
            className="block mb-1 text-base font-semibold text-gray-600"
            dateTime={date}
          >
            {formattedDate}
          </time>
          <address className="block mb-5 text-sm text-gray-500 whitespace-pre">
            {formattedAddress}
          </address>
        </div>
        <div className="sm:flex sm:justify-end">
          <Button href={`/events/${id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}
