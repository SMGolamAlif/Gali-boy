import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./index.css";
console.log("hi");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
]);

function App() {
  console.log("App component rendered");
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
