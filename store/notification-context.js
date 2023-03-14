import { createContext, useEffect, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: (status, title, message) => {},
  hideNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState();

  function showNotification(status, title, message) {
    setNotification({ status, title, message });
  }

  function hideNotification() {
    setNotification(null);
  }

  useEffect(() => {
    if (notification && notification.status !== 'pending') {
      const timer = setTimeout(hideNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const context = { notification, showNotification, hideNotification };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
