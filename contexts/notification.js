import React, {createContext, useState, useContext} from 'react';

// Create a context for notifications
const NotificationContext = createContext();

// Create a provider component
export const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info', duration = false) => {
    setNotification({message, type});

    if (duration) {
      setTimeout(() => setNotification(null), duration); // Hide notification after 5 seconds
    }
  };

  return (
    <NotificationContext.Provider value={{showNotification}}>
      {children}
      {notification && (
        <div
          className={`fixed top-16 left-0 w-full p-4 ${
            notification.type === 'info'
              ? 'bg-blue-500 text-white'
              : notification.type === 'success'
                ? 'bg-green-500 text-white'
                : notification.type === 'warning'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-red-500 text-white'
          } shadow-lg z-50`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-center">{notification.message}</p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);
