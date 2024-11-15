import React, { createContext, useEffect, useState } from 'react';
import logoCompany from '../assets/logo.svg';
import logoValid from '../assets/Icon_Valid.svg';
import './App.css';
import useIsMobile from '../hooks/useIsMobile';
import { HomePage } from '../components/home-page/HomePage';
import { AboutUsPage } from '../components/about-us-page/AboutUsPage';
import { ContactUsPage } from '../components/contact-us-page/ContactUsPage';
import { Footer } from '../components/footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeaderBar } from '../components/header-bar/HeaderBar';

export const IsMobileContext = createContext(false);

const router = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderBar/><HomePage/><Footer/></>,
  },
  {
    path: "/about-us",
    element: <><HeaderBar/><AboutUsPage/><Footer/></>
  },
  {
    path: "/contact-us",
    element: <><HeaderBar/><ContactUsPage/><Footer/></>
  }
]);

function App() {
  const isMobile = useIsMobile();

  return (
    <div className='App'>
      <IsMobileContext.Provider value={isMobile}>
        <RouterProvider router={router}/>
      </IsMobileContext.Provider>
    </div>
  );
}

export default App;
