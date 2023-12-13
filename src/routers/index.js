import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { MenuProvider } from '../components/Header/MenuContext';

//Header section
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import Header from "../components/Header/Header";


// Pages
import PageHome from "../containers/PageHome/PageHome";

// Signinup Pages
import PageSignIn from "../containers/PageSignInUp/PageSignIn";
import PageSignUp from "../containers/PageSignInUp/PageSignUp";
import PageSignOtp from "../containers/PageSignInUp/PageSignOtp";

//Accout Pages
import PageAccount from "../containers/PageAccount/PageAccount";
import PageWallet from "../containers/PageAccount/PageWallet";
import PageBankaccount from "../containers/PageAccount/PageBankDetail";
import PageNotifications from "../containers/PageAccount/PageNotifications";

// Lagle Pages
import PageAbout from "../containers/PageLagle/PageAbout";
import PageFaqs from "../containers/PageLagle/PageFaqs";
import PagePrivacy from "../containers/PageLagle/PagePrivacy";
import PageTerms from "../containers/PageLagle/PageTerms";

// Contact Page
import PageContact from "../containers/PageContact/PageContact";

// Sitemap page
import PageSitemap from "../containers/PageLagle/PageSitemap";

// Footer section
import FlashMessage from "../components/FlashMessage";
import Footer from "../components/Footer/Footer";



export const pages = [
  { path: "/", component: PageHome },
  
  { path: "/signin", component: PageSignIn },
  { path: "/signup", component: PageSignUp },
  { path: "/signotp", component: PageSignOtp },

  { path: "/account", component: PageAccount },
  { path: "/wallet", component: PageWallet },
  { path: "/bankaccount", component: PageBankaccount },
  { path: "/notifications", component: PageNotifications },

  { path: "/about", component: PageAbout },
  { path: "/faqs", component: PageFaqs },
  { path: "/privacy", component: PagePrivacy },
  { path: "/terms", component: PageTerms },

  { path: "/contact", component: PageContact },

  { path: "/sitemap", component: PageSitemap },
];

const MyRoutes = () => {

  const location = useLocation();

  const pathsToHideheader = ['/signin', '/signup', '/signotp'];
  const pathsToHidefooter = ['/signin', '/signup', '/signotp', '/account', '/wallet', '/bankaccount', '/notifications' ];
  const hideheader = pathsToHideheader.includes(location.pathname);
  const hidefooter = pathsToHidefooter.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Loader />
      {!hideheader && <Header />}
      <main className="main-wrapper">
        <Routes>
          {pages.map(({ component: Component, path }, index) => {
            return <Route key={index} element={<Component />} path={path} />;
          })}
        </Routes>
      </main>

      <FlashMessage />
      {!hidefooter && <Footer />}
    </>
  );
};

function MainRoutes() {
  return (
    <Router>
      <MenuProvider>
        <MyRoutes />
      </MenuProvider>
    </Router>
  );
}

export default MainRoutes;