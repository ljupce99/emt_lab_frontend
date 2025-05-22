import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import CountryPage from "./ui/pages/countryPage/countryPage.jsx";
import HostPage from "./ui/pages/hostPage/hostPage.jsx";
import AccommodationPage from "./ui/pages/accommodationPage/accommodationPage.jsx";
import HomePage from "./ui/pages/homePage/homePage.jsx";
import Layout from "./ui/Layout/Layout.jsx";
import ReservationPage from "./ui/pages/reservationPage/reservationPage.jsx";




const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reservation" element={<ReservationPage />} />

                    <Route path="/country" element={<CountryPage />} />
                    <Route path="/host" element={<HostPage />} />
                    <Route path="/accommodation" element={<AccommodationPage/>}/>
                </Route>



            </Routes>
            
        </BrowserRouter>
    );
};

export default App;