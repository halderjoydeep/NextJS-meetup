import React from 'react';

export default function CommentItem({ name, comment }) {
  return (
    <li className="py-4 border-b border-b-gray-600">
      <p>{comment}</p>
      <div className="text-right text-sm">
        <address>By {name}</address>
      </div>
    </li>
  );
}
