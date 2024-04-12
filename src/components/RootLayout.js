import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavbarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';

export const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};
