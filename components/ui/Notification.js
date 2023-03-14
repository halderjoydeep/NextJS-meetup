import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

export default function Notification({ notification }) {
  const { status, title, message } = notification;

  const notificationCtx = useContext(NotificationContext);

  let bgColor = 'bg-blue-500';

  if (status === 'success') {
    bgColor = 'bg-green-500';
  } else if (status === 'error') {
    bgColor = 'bg-red-500';
  }

  return (
    <div
      className={`fixed bottom-0 w-screen flex items-center justify-between px-[10%] py-8 text-white ${bgColor}`}
      onClick={notificationCtx.hideNotification}
    >
      <p className="font-bold text-lg">{title}</p>
      <p>{message}</p>
    </div>
  );
}
