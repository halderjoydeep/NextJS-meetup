import React, { useRef } from 'react';

export default function NewsLetter() {
  const emailRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className="max-w-2xl w-[70%] mx-auto mt-8 text-center">
      <h2 className="text-xl font-bold">Sign up to stay updated.</h2>
      <form className="mt-6" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-2 border w-full sm:w-72"
          ref={emailRef}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-teal-700 text-white mt-4 sm:mt-0 w-full sm:w-auto"
        >
          Register
        </button>
      </form>
    </section>
  );
}
