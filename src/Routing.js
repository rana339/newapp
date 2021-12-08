import React from "react";
import {Home, About, Service, Contact} from './components/Farag'
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Rounting = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' elment={<Signup />} />

            </Routes>
        </Router>

    )
};
export default Rounting;