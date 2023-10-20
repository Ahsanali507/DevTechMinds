import React, { useState } from "react";
// import devtechlogo from "../../assets/DevTechLog.gif";
import {Link} from "react-scroll"
import {motion} from "framer-motion"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-gradient-to-r from-cyan-500 to-blue-100">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        {/* <img src={devtechlogo} className="w-100 h-10 mr-2" alt="Logo" /> */}
        <motion.h2 className="ml-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          whileHover={{
            "--gradient": "linear-gradient(100deg, red, orange)", // Set a CSS variable for the gradient
            color: "transparent", // Set the text color to transparent
            background: "var(--gradient)", // Use the CSS variable for the gradient as the background
            WebkitBackgroundClip: "text", // Clip the gradient to the text
            textShadow:"2px 2px 0px red, -2px -2px 0px orange, 4px 4px 0px pink, -4px -4px 0px purple",
            transition: { type: "spring", duration: 0.5 },
          }}
        >DevTech
        </motion.h2>
        <motion.div
          className="absolute w-40 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded mt-12"
          initial={{ x: "0%" }}
          animate={{ x: "30%", transition: { duration: 4, repeat: Infinity, repeatType: "reverse" } }}
        ></motion.div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-grow">
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Features
          </Link>
          <Link
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Clients
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block mt-4 px-4 lg:inline-block lg:mt-0 text-white-200 mr-4 font-bold hover:text-gray cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;