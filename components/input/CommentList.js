import CommentItem from './CommentItem';

export default function CommentList({ list, isLoading }) {
  return (
    <>
      <h3 className="text-xl font-bold text-center">All Comments</h3>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul className="w-full mt-4">
          {list.map((item) => (
            <CommentItem
              key={item._id}
              comment={item.comment}
              name={item.name}
            />
          ))}
        </ul>
      )}
    </>
  );
}
