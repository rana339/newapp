import React from "react";
import Navbar from './Navbar'
import Login from './Login'
import Signup from "./Signup";


const Home = () => {
    return (
        <>
            <Navbar />

            <Login />
            <Signup />

        </>
    );
};



const About = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to </p>
                <h1>about page</h1>
            </section>
        </>
    );
};

const Service = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to </p>
                <h1> Service Page</h1>
            </section>
        </>
    );
};

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to </p>
                <h1> Contact Page</h1>
            </section>
        </>
    );
};
export { Home, About, Service, Contact };