import React from "react";
import { motion } from "framer-motion";
import companyLogo from "../../assets/Devtechminds logo.gif";
function Navbar() {
  return (
    <motion.nav className="flex bg-gradient-to-r from-cyan-500 to-blue-500navbar-container">
      <motion.div className="navbar-upper">
        <motion.div className="w-40 h-40 company-logo">
          <motion.img className="p-3 logo" src={companyLogo} alt="no img" />
        </motion.div>
      </motion.div>
      <motion.div className="h-20 flex items-center justify-end w-full font-sans navbar-lower">
        <motion.div className="links">
          <motion.ul className="flex ">
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="home"
                href="/">
                Home
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="about"
                href="/">
                About
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="services"
                href="/">
                Services
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="features"
                href="/">
                Features
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="pricing"
                href="/">
                Pricing
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="blog"
                href="/">
                Blog
              </motion.a>
            </motion.li>
            <motion.li className="px-6">
              <motion.a
                whileHover={{
                  borderBottom: "3px solid black",
                }}
                className="contact"
                href="/">
                Contact Us
              </motion.a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;
