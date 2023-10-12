import React from "react";
import { motion } from "framer-motion";
function Footer() {
  return (
      <motion.div className="footer-container">
        <motion.div className="flex w-full h-80 font-sans footer-upper items-center bg-gradient-to-r from-white to-gray-200">
          <motion.div className="w-1/4 px-2 aboutsection flex flex-col justify-center items-center ">
            <h3 className="text-2xl font-light pb-20">About Us</h3>
            <p className="ml-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              aut.
            </p>
          </motion.div>
          <motion.div className="flex justify-center w-1/4 company">
            <motion.ul className="companyInfo">
            <h3 className="pl-5 text-2xl font-light text-center">Company</h3>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="home"
                  href="/">
                  Home
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  About
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  Services
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  Features
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex justify-center w-1/4 support">
          <motion.ul className="supports">
          <h3 className="pl-5 text-2xl font-light">Support</h3>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="home"
                  href="/">
                  Home
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  About
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  Services
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  Features
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex justify-center w-1/4 rules">
          <motion.ul className="legalrules">
            <h3 className="pl-5 text-2xl font-light">Legal</h3>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="home"
                  href="/">
                  Home
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  About
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  Services
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  Features
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div className="font-sans text-center bg-black footer-lower h-14 flex justify-center items-center">
            <small className="text-white ">2023@ DevMinds developed by Ahsan's Themes</small>
        </motion.div>
      </motion.div>
  );
}

export default Footer;
