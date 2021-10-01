import { FC, useState, useEffect, useCallback } from 'react';

import GlobalStyle from 'styles/global';
import { useNotification } from 'contexts/notification';
import { SettingsForm, NotificationBar, Timer } from 'components';
import { useClockify } from 'hooks';

import { Container, Main, Sidebar } from 'App.styles';

const ONE_SECOND = 1000;

const playAudio = () => {
  const audio = new Audio('sounds/beep-07a.mp3');

  audio.play();
};

const App: FC = () => {
  const initial = 10 * ONE_SECOND;

  const [milliseconds, setMilliseconds] = useState(initial);
  const [isStarted, setIsStarted] = useState(false);

  const { addMessage } = useNotification();

  const time = useClockify(milliseconds);

  const startTimer = useCallback(() => {
    setIsStarted(true);
    addMessage('Countdown started');
    playAudio();
  }, [addMessage]);

  const endTimer = useCallback(() => {
    setIsStarted(false);
    addMessage('Countdown ended');
    playAudio();
  }, [addMessage]);

  useEffect(() => {
    if (isStarted) {
      const timer = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - ONE_SECOND);

          if (milliseconds === ONE_SECOND) {
            setMilliseconds(initial);
            endTimer();
          }
        } else {
          clearInterval(timer);
        }
      }, ONE_SECOND);
  
      return () => clearInterval(timer);
    }
  }, [milliseconds, isStarted, endTimer, initial]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <NotificationBar />
        <Main>
          <Timer
            onStart={startTimer}
            time={time}
          />
        </Main>
        <Sidebar>
          <SettingsForm />
        </Sidebar>
      </Container>
    </>
  );
};

export default App;
