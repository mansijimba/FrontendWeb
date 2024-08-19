import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNav from './MainNav'; // Import your MainNav component
import HomePage from './HomePage'; // Import your HomePage component
import Blog from './blog'; // Import your Blog component
import Login from './login';
import Register from './register';
import Cart from './cart';
import Shop from './shop';
import Dashboard from './Dashboard';
import RightContent from './RightContent';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNav />, // Use MainNav as the layout component
      children: [
        {
          path: "/", // Home page
          element: <HomePage />,
        },
        {
          path: "blog", // Blog page
          element: <Blog />,
        },
        {
          path: "login", // login page
          element: <Login />,
        },
        {
          path: "register", // register page
          element: <Register />,
        },
        {
          path: "cart", // cart page
          element: <Cart />,
        },
        {
          path: "shop", // shop page
          element: <Shop />,
        },
        {
          path: "dashboard", // shop page
          element: <Dashboard />,
        },
        {
          path: "RightContent", // shop page
          element: <RightContent />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
