import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import './index.css';
import ShopPage from './Pages/ShopPage.jsx';
import UnderConstructionPage from './Pages/UnderConstructionPage/UnderConstructionPage.jsx';


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
    path: '/PageNotFound',
    element: <UnderConstructionPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
