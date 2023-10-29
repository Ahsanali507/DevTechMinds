import React from "react";
import { motion } from "framer-motion";
function Footer() {
  return (
      <motion.div className="footer-container">
        <motion.div className="flex items-center w-full font-sans h-80 footer-upper bg-gradient-to-r from-white to-gray-200">
          <motion.div className="flex flex-col items-center justify-center w-1/4 px-2 aboutsection ">
            <h3 className="pb-20 text-2xl font-light">About Us</h3>
            <p className="ml-12">
              We can provide you better services that you want and we provide you these with minimum or affordable pricing/budget. 
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
                  link1
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  link2
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  link3
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  link4
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex justify-center w-1/4 support">
          <motion.ul className="supports">
          <h3 className="pl-5 text-2xl font-light">Supports</h3>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="home"
                  href="/">
                  support1
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  support2
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  Support3
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  Support4
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex justify-center w-1/4 rules">
          <motion.ul className="legalrules">
            <h3 className="pl-5 text-2xl font-light">Rules</h3>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="home"
                  href="/">
                  Rule1
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="about"
                  href="/">
                  Rule2
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="services"
                  href="/">
                  Rule3
                </motion.a>
              </motion.li>
              <motion.li className="px-6 pt-4">
                <motion.a
                  whileHover={{
                    borderBottom: "1px solid black",
                  }}
                  className="features"
                  href="/">
                  Rule4
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div className="flex items-center justify-center font-sans text-center bg-black footer-lower h-14">
            <small className="text-white ">2023-2024@ DevTech developed by Ahsan's Themes</small>
        </motion.div>
      </motion.div>
  );
}

export default Footer;
