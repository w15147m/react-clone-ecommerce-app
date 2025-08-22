import React from "react";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
