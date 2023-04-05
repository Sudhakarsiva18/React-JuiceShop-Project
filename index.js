import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Juices from "./Routes/Juices";
import Home from "./Routes/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Milkshakes from "./Routes/Milkshakes";
import Mojito from "./Routes/Mojito";
import './App.css'
import Contact from "./Routes/Contact";

const AppLayout = () =>(
  <>
    <Navbar/>
    <Outlet/>
  </>
)

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "Juices",
        element: <Juices/>,
      },
      {
        path: "Milkshakes",
        element: <Milkshakes/>,
      },
      {
        path: "Mojito",
        element: <Mojito/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      }
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);