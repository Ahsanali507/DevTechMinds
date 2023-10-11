import React from 'react';
import Navbar from '../components/global/Navbar';
import Header from '../components/global/Header';
import About from '../components/home/About';
// import Footer from '../components/global/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <About/>
            {/* <Footer/> */}
        </div>
    );
}

export default Homepage;
