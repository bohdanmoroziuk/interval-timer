import { FC } from 'react';

import GlobalStyle from 'styles/global';

import { SettingsForm, Timer } from 'components';

import { Container, Main, Sidebar } from 'App.styles';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Main>
        <Timer />
      </Main>
      <Sidebar>
        <SettingsForm />
      </Sidebar>
    </Container>
  </>
);

export default App;
