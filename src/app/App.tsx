import React, { createContext, useEffect, useState } from 'react';
import logoCompany from '../assets/logo.svg';
import logoValid from '../assets/Icon_Valid.svg';
import './App.css';
import useIsMobile from '../hooks/useIsMobile';
import { NavBar } from '../components/nav-bar/NavBar';
import { HomePage } from '../components/page/home-page/HomePage';
import { AboutUsPage } from '../components/page/about-us-page/AboutUsPage';
import { ContactUsPage } from '../components/page/contact-us-page/ContactUsPage';
import { Router } from "@reach/router"
import { Footer } from '../components/footer/Footer';

const IsMobileContext = createContext(false);

function App() {
  const isMobile = useIsMobile();

  return (
    <IsMobileContext.Provider value={isMobile}>
      {isMobile ? <></> : <NavBar/>}
      <Router>
        <HomePage path="/"/>
        <AboutUsPage path="/about-us"/>
        <ContactUsPage path="/contact-us"/>
      </Router>
      <Footer/>
    </IsMobileContext.Provider>
  );
}

export default App;
