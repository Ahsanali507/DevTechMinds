import React from "react";
import { motion } from "framer-motion";
import homeImage from "../../assets/home image.png";
import { Element } from "react-scroll";

function Header() {
  return (
    <Element name="home">
    <motion.div className="flex w-full h-full bg-gradient-to-r from-cyan-500 to-blue-100 header-container">
      <motion.div className="flex flex-col justify-center ont-sans aw-1/2 header-container-left">
        <motion.h2 className="px-10 py-2 text-4xl font-bold heading">
          Tech Transformation Starts Here
        </motion.h2>
        <motion.p className="px-10 py-2 my-2 text-base text-gray-600 font-extralight description">
        At DecTech, we bring your tech dreams to life, one project at a time. <br /> We're dedicated to turning your vision into reality
        </motion.p>
        <motion.button
          className="py-3 px-8 ml-10 text-sm font-medium text-center text-white rounded-lg bg-primary-600 sm:w-fit hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button">
          Learn More
        </motion.button>
      </motion.div>
      <motion.div className="w-1/2 header-container-right">
        <motion.img
          animate={{ y: [20, -20, 20], transition: { yoyo: Infinity, duration: 2, repeat: Infinity} }}
          src={homeImage}
          alt="no img"
          className="homeImage"
        />
      </motion.div>
    </motion.div>
    </Element>
  );
}

export default Header;
