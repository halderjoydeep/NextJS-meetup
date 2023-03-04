import React from 'react';

export default function EventSummary({ title }) {
  return (
    <section className="px-[20%] pt-8 pb-[8rem] bg-cyan-600">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
        {title}
      </h1>
    </section>
  );
}
