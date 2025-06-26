import React from "react";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer.jsx";
import HomeItem from "./features/HomeItem.jsx";

function App() {
    const item =  {
        id: '001',
        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    };
    return (
        <>
           <Nav/>
            <main>
                <div className="items-container">
                    <HomeItem item={item}/>
                    <HomeItem item={item}/>
                    <HomeItem item={item}/>
                    <HomeItem item={item}/>
                </div>
            </main>
           <Footer/>
        </>
    );
}

export default App;