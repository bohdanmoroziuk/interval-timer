import { FC, createContext, useState, useContext } from 'react';

export interface IMessage {
  text: string;
  timestamp: number;
}

export type TAddMessage = (text: string) => void;

export interface INotificationContext {
  message: IMessage;
  addMessage: TAddMessage;
}

export const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export const NotificationProvider: FC = ({ children }) => {
  const [message, setMessage] = useState<IMessage>({} as IMessage);

  const addMessage: TAddMessage = (text) => {
    setMessage({
      text,
      timestamp: Date.now(),
    });
  };

  const value = {
    message,
    addMessage,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
