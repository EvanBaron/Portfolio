import React from "react";
import dotenv from "dotenv";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar";
import NavPanel from "./components/navpanel/NavPanel";
import Landing from "./containers/landing/Landing";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import "./i18next";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Navbar />
    <NavPanel />
    <Landing />
    <About />
    <Contact />
  </React.StrictMode>
);
