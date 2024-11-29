import { createContext } from 'react';
import './App.scss';
import useIsMobile from './hooks/useIsMobile';
import { HomePage } from '../pages/home-page/HomePage';
import { AboutUsPage } from '../pages/about-us-page/AboutUsPage';
import { ContactUsPage } from '../pages/contact-us-page/ContactUsPage';
import { Footer } from '../components/footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeaderBar } from '../components/header-bar/HeaderBar';

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

export const IsMobileContext = createContext(false);

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
