import { IoCalendarClear, IoLocationSharp } from 'react-icons/io5';

/* eslint-disable @next/next/no-img-element */
export default function EventLogistics({ image, title, date, address }) {
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = address.replace(', ', '\n');
  return (
    <section className="relative -top-16 card w-[80%] max-w-xl mx-auto grid sm:grid-cols-2 place-items-center gap-8 bg-neutral-800 ">
      <img
        src={`/${image}`}
        alt={title}
        className="h-[150px] w-[150px] sm:h-[240px] sm:w-[240px] border-[5px] rounded-full border-white object-cover"
      />
      <div className="h-full flex flex-col justify-center gap-4 sm:gap-8 items-center sm:items-start text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start ">
          <IoCalendarClear className="mb-2 text-xl text-teal-400 " />
          <time
            className="block text-lg tracking-wider text-teal-100 "
            dateTime={date}
          >
            {formattedDate}
          </time>
        </div>

        <div className="flex flex-col items-center sm:items-start ">
          <IoLocationSharp className="mb-2 text-2xl text-teal-400" />
          <address className="block whitespace-pre text-lg tracking-wider text-teal-100 ">
            {formattedAddress}
          </address>
        </div>
      </div>
    </section>
  );
}
