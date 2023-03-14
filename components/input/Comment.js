import React, { useEffect, useCallback, useState } from 'react';
import { Button } from '../ui';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function Comment({ eventId }) {
  const [showComment, setShowComment] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadComments = useCallback(() => {
    setIsLoading(true);
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCommentList(data.commentList);
      });
  }, [eventId]);

  function toggleComments() {
    setShowComment((prev) => !prev);
  }

  useEffect(() => {
    if (showComment) {
      loadComments();
    }
  }, [loadComments, showComment]);

  return (
    <section className="max-w-2xl w-[80%] mx-auto flex flex-col items-center my-8">
      <Button onClick={toggleComments}>
        {showComment ? 'Hide' : 'Show'} Comments
      </Button>
      {showComment && (
        <CommentForm eventId={eventId} loadComments={loadComments} />
      )}
      {showComment && <CommentList list={commentList} isLoading={isLoading} />}
    </section>
  );
}
