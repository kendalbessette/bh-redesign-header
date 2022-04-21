import React from 'react';
import {NextPageContext} from 'next';
import {AppProps} from 'next/app';
import {ThemeProvider} from '../src/theme';
import {theme} from '../src/theme/theme';
import {
  AppWrapper,
  Header,
  AppContainer,
  Head as DefaultHead,
} from '../src/components';
import {GlobalStyle} from '../src/theme/global';

interface Props extends AppProps {
  ctx: NextPageContext;
}

const GlobalLayout = ({children}: {children: React.ReactNode}) => (
  <AppWrapper>
    <DefaultHead title="" />
    <GlobalStyle />
    <Header />
    <AppContainer>
    </AppContainer>
  </AppWrapper>
);

const Application = ({Component, pageProps}: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  </ThemeProvider>
);

Application.getInitialProps = async ({Component, ctx}: Props) => {
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
  };
};

export default Application;
