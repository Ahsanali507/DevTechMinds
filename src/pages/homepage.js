import React from 'react';
import Navbar from '../components/global/Navbar';
import Header from '../components/global/Header';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import Footer from '../components/global/Footer';
import ContactUs from '../components/home/ContactUs';
import ChatBox from '../components/global/ChatBox';
import Pricing from '../components/home/Pricing';
import Clients from '../components/home/Clients';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            <Features/>
            <Pricing/>
            <Clients/>
            <ContactUs/>
            <ChatBox/>
            <Footer/>
        </div>
    );
}

export default Homepage;
