import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <Link
      className="text-white bg-teal-700 hover:bg-teal-800 rounded-md shadow-md py-2 px-4"
      href={href}
    >
      {children}
    </Link>
  );
}
