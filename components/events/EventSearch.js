import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Button } from '../ui';

export default function EventSearch() {
  const yearRef = useRef();
  const monthRef = useRef();

  const router = useRouter();

  function submitHandler(event) {
    const year = yearRef.current.value;
    const month = monthRef.current.value;
    router.push(`/events/${year}/${month}`);
    event.preventDefault();
  }

  return (
    <form
      onSubmit={submitHandler}
      className="card max-w-2xl w-[90%] mx-auto mt-8 flex flex-col md:flex-row justify-center items-center gap-4 bg-white "
    >
      <div>
        <label className="font-bold">Year</label>
        <select
          ref={yearRef}
          className="ml-4 py-1 px-2 border-2 border-black-500 rounded-md"
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div>
        <label className="font-bold">Month</label>
        <select
          ref={monthRef}
          className="ml-4 py-1 px-2 border-2 border-black-500 rounded-md"
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>

      <Button>Filter</Button>
    </form>
  );
}
