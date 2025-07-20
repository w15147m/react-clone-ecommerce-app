import React from "react";
import Nav from "./layouts/Nav.jsx";
import Footer from "./layouts/Footer.jsx";
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