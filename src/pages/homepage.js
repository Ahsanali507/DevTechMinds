import React from 'react';
import Navbar from '../components/global/Navbar';
import Header from '../components/global/Header';
import About from '../components/home/About';
import Services from '../components/home/Services';
// import Footer from '../components/global/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            <Services/>
            {/* <Footer/> */}
        </div>
    );
}

export default Homepage;
