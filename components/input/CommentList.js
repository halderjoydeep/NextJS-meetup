import { comment } from 'postcss';
import React, { useState } from 'react';
import CommentItem from './CommentItem';

export default function CommentList({ list }) {
  return (
    <>
      <h3 className="text-xl font-bold text-center">All Comments</h3>
      <ul className="w-full mt-4">
        {list.map((item) => (
          <CommentItem key={item.id} comment={item.comment} name={item.name} />
        ))}
      </ul>
    </>
  );
}
