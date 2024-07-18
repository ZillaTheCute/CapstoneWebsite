import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css';

// Pages
import AboutPage from './Pages/AboutPage.jsx';
import ShopPage from './Pages/ShopPage.jsx';
import LandingPage from './Pages/LandingPage.jsx'
import UnderConstructionPage from './Pages/UnderConstructionPage/UnderConstructionPage.jsx';
import FindUsPage from './Pages/FindUsPage.jsx';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from './Pages/TermsAndConditionsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/Shop',
    element: <ShopPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/About',
    element: <AboutPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/FindUs',
    element: <FindUsPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/PrivacyPolicy',
    element: <PrivacyPolicyPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/TermsAndConditions',
    element: <TermsAndConditionsPage />,
    errorElement: <UnderConstructionPage />,
  },
  {
    path: '/PageNotFound',
    element: <UnderConstructionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
