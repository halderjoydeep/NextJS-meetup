import React, { useRef } from 'react';
import { Button } from '../ui';

export default function CommentForm({ eventId, loadComments }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const comment = commentRef.current.value;

    if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
      alert('Please fill all details');
      return;
    }

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({ name, email, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 422) {
        alert('Invalid Inputs');
      }

      nameRef.current.value = '';
      emailRef.current.value = '';
      commentRef.current.value = '';
      loadComments();
    });
  }

  return (
    <form className="my-8 p-6 w-full bg-teal-500" onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 rounded-md bg-cyan-100 placeholder-gray-500"
          ref={nameRef}
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 rounded-md bg-cyan-100 placeholder-gray-500"
          ref={emailRef}
        />
        <textarea
          placeholder="Write your comment"
          rows="5"
          className="sm:col-span-2 py-2 px-4 rounded-md bg-cyan-100 placeholder-gray-500"
          ref={commentRef}
        />
      </div>

      <button className="bg-white text-teal-700 hover:bg-teal-800 hover:text-white rounded-md shadow-md py-2 px-4">
        Submit
      </button>
    </form>
  );
}
