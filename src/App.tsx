import { FC, useState, useEffect, useCallback, useRef } from 'react';

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

  const timer = useRef<any>(null);

  const { addMessage } = useNotification();

  const time = useClockify(milliseconds);

  const startTimer = useCallback(() => {
    setIsStarted(true);
    addMessage('Countdown started');
    playAudio();
  }, [addMessage]);

  const stopTimer = useCallback(() => {
    setIsStarted(false);
    setMilliseconds(initial);
    addMessage('Countdown ended');
    playAudio();
    clearInterval(timer.current);
  }, [addMessage, initial]);

  useEffect(() => {
    if (isStarted) {
      timer.current = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - ONE_SECOND);

          if (milliseconds === ONE_SECOND) {
            stopTimer();
          }
        }
      }, ONE_SECOND);
  
      return () => clearInterval(timer.current);
    }
  }, [milliseconds, isStarted, stopTimer, initial]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <NotificationBar />
        <Main>
          <Timer
            onStart={startTimer}
            onStop={stopTimer}
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
