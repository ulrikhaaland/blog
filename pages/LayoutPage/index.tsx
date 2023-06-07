import { Backdrop } from '@mui/material';
import Header from '../../components/Header';
import { Route, Routes } from 'react-router-dom';
import { CustomRoute, defaultRoutes } from '../../routers/routes';
import Login from '../../components/Login';
import { observer } from 'mobx-react';
import LoggedIn from '../../components/Login/LoggedIn';
import { useStore } from '../../RootStoreProvider';
import { Component } from 'react';
import { AppProps } from 'next/app';
import { NextPageWithLayout } from '../_app';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const LayoutPage = ({ Component, pageProps }: AppPropsWithLayout) => {
  const { authStore } = useStore();

  const { open, setOpen, user } = authStore;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {/* MENU */}
      <Header></Header>
      {/* Page Container */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //   justifyContent: "center",
          height: '100vh',
          width: 'calc(100%)',
        }}
      >
        {getLayout(<Component {...pageProps} />)}

        {open ? user ? <LoggedIn /> : <Login /> : null}
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => {
          setOpen(false);
          authStore.setFromPath(undefined);
        }}
      />
    </>
  );
};

export default observer(LayoutPage);
