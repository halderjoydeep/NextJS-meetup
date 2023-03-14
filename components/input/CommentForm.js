import React, { useContext, useRef } from 'react';
import NotificationContext from '../../store/notification-context';

export default function CommentForm({ eventId, loadComments }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const { showNotification } = useContext(NotificationContext);

  function submitHandler(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const comment = commentRef.current.value;

    if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
      alert('Please fill all details');
      return;
    }

    showNotification('pending', 'Commenting!', 'Submitting the comment...');

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({ name, email, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }

        const data = await res.json();
        throw new Error(data.message);
      })
      .then((data) => {
        showNotification('success', 'Commented!', data.message);
        nameRef.current.value = '';
        emailRef.current.value = '';
        commentRef.current.value = '';
        loadComments();
      })
      .catch((err) => {
        showNotification(
          'error',
          'Error!',
          err.message || 'Something went wrong'
        );
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
