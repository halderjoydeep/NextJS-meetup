import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import Header from './Header';
import Notification from './Notification';

export default function Layout({ children, title, description }) {
  const notificationCtx = useContext(NotificationContext);

  const { notification } = notificationCtx;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description || 'Lot of great events to explore'}
        />
      </Head>
      <Header />
      <main>{children}</main>
      {notification && <Notification notification={notification} />}
    </>
  );
}
