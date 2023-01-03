import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="w-screen py-4 px-[10%] flex items-center justify-between bg-slate-900 shadow-md ">
        <Link href="/" className="text-2xl font-bold text-teal-200">
          Events
        </Link>
        <nav>
          <Link href="/events" className="text-xl font-semibold text-teal-400">
            All events
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
