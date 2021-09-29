import { FC, useState, useEffect, useRef } from 'react';

import { Container, MessaseBox, CloseButton } from 'components/notification-bar/styles';
import { useNotification } from 'contexts/notification';

export interface NotificationBarProps {
  delay?: number;
}

const NotificationBar: FC<NotificationBarProps> = ({ delay = 3000 }) => {
  const { message } = useNotification();

  let timeout = useRef<any>(null);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (message?.text?.trim()) {
      setIsShown(true);

      timeout.current = setTimeout(() => {
        setIsShown(false);
      }, delay);

      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [delay, message]);

  const close = () => {
    clearInterval(timeout.current);
    setIsShown(false);
  };

  if (!isShown) return null;

  return (
    <Container>
      <MessaseBox>
        {message.text} {message.timestamp}
      </MessaseBox>
      <CloseButton onClick={close}>
        Close
      </CloseButton>
    </Container>
  );
};

export default NotificationBar;
