import { FC } from 'react';

import GlobalStyle from 'styles/global';

import { Container, Main, Sidebar } from 'App.styles';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <Main></Main>
      <Sidebar></Sidebar>
    </Container>
  </>
);

export default App;
