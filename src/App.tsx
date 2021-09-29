import { FC } from 'react';

import GlobalStyle from 'styles/global';
import { useNotification } from 'contexts/notification';
import { SettingsForm, Timer, NotificationBar } from 'components';

import { Container, Main, Sidebar } from 'App.styles';

const App: FC = () => {
  const { addMessage } = useNotification();

  const startTimer = () => {
    addMessage('Countdown started');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <NotificationBar />
        <Main>
          <Timer onStart={startTimer} />
        </Main>
        <Sidebar>
          <SettingsForm />
        </Sidebar>
      </Container>
    </>
  );
};

export default App;
