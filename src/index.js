import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import Dashboard from './routes/Dashboard';

const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )

}


const router = createBrowserRouter([
  {
    element : <AppLayout />,
      children: [
        {
          path: "/",
          element:  [ <Navbar />, <SignIn />],
        },
        {
          path: "dashboard",
          element: [<Sidebar />, <Dashboard />,],
        }
         

      ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);