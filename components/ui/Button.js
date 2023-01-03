import Link from 'next/link';

export default function Button(props) {
  if (props.href) {
    return (
      <Link
        className="text-white bg-teal-700 hover:bg-teal-800 rounded-md shadow-md py-2 px-4"
        href={props.href}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className="text-white bg-teal-700 hover:bg-teal-800 rounded-md shadow-md py-2 px-4"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
