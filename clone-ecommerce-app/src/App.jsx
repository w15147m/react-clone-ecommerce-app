import React from "react";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer.jsx";

function App() {
    return (
        <>
           <Nav/>
            <main>
                <div className="items-container">
                </div>
            </main>
           <Footer/>
        </>
    );
}

export default App;