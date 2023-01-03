/* eslint-disable @next/next/no-img-element */
import { Button } from '../ui';
import {
  IoCalendarClear,
  IoLocationSharp,
  IoArrowForwardOutline,
} from 'react-icons/io5';

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
    <li className="card my-4 grid sm:grid-cols-5 gap-8 bg-white">
      <img
        src={'/' + image}
        alt={name}
        className="sm:col-span-2 object-cover h-[200px] w-full rounded-md"
      />

      <div className="h-full sm:col-span-3 flex flex-col justify-between text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start ">
          <h2 className="mb-2 text-xl font-bold">{title}</h2>

          <div className="flex items-center gap-2 mb-1 text-gray-600">
            <IoCalendarClear />
            <time className="block text-base font-semibold" dateTime={date}>
              {formattedDate}
            </time>
          </div>

          <div className="flex items-center gap-2 mb-5 text-gray-500">
            <IoLocationSharp />
            <address className="block whitespace-pre text-sm">
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className="sm:flex sm:justify-end">
          <Button href={`/events/${id}`}>
            Explore Event
            <IoArrowForwardOutline className="inline ml-2" />
          </Button>
        </div>
      </div>
    </li>
  );
}
