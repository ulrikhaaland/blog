import '@/styles/globals.css';
import { theme } from '@/theme';
import { ThemeProvider } from '@emotion/react';
import { Backdrop, Box } from '@mui/material';
import { Inter } from '@next/font/google';
import { Provider, observer } from 'mobx-react';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { RootStoreProvider, useStore } from '@/RootStoreProvider';
import LayoutPage from './LayoutPage';
import { NextPage } from 'next';
import Header from '@/components/Header';
import Login from '@/components/Login';
import LoggedIn from '@/components/Login/LoggedIn';
import { useRouter, Router } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

const firebaseConfig = {
  apiKey: 'AIzaSyDEit_joW8IEOgTCFepUmEYsTX1kE2fI2o',
  authDomain: 'blog-f5c71.firebaseapp.com',
  projectId: 'blog-f5c71',
  storageBucket: 'blog-f5c71.appspot.com',
  messagingSenderId: '689577205223',
  appId: '1:689577205223:web:2c2bd2ad76f568c9473142',
  measurementId: 'G-MS8VCLQE8J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const { authStore } = useStore();

  const getLayout = Component.getLayout ?? ((page) => page);

  const { open, setOpen, user } = authStore;

  useEffect(() => {
    if (!authStore.user && auth) authStore.checkAuth();
  }, [authStore]);

  return (
    <main className={inter.className}>
      <React.StrictMode>
        <Provider>
          <ThemeProvider theme={theme}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <RootStoreProvider>
                  <>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <LayoutPage
                        pageProps={pageProps}
                        Component={Component}
                        router={router}
                      ></LayoutPage>
                    </Box>
                  </>
                </RootStoreProvider>
              </Box>
            </React.Suspense>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
    </main>
  );
};

export default App;
