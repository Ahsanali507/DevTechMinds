import React from "react";
import { motion } from "framer-motion";
import homeImage from "../../assets/home image.png";

function Header() {
  return (
    <motion.div className="flex w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500header-container">
      <motion.div className="flex flex-col justify-center ont-sans aw-1/2 container-left">
        <motion.h2 className="px-10 py-2 text-5xl font-bold heading">
          Make Your Marketing Real.
        </motion.h2>
        <motion.p className="px-10 py-2 my-2 text-base font-extralight description">
          Lorem ipsum dolor sit amet, conseonsectetur adipisi <br /> cing elit.
          Quidem, qui.
        </motion.p>
        <motion.button
          className="w-40 py-3 mx-10 my-2 text-center bg-orange-500 rounded text-slate-100 p- learnMore"
          type="button">
          Learn More
        </motion.button>
      </motion.div>
      <motion.div className="w-1/2 container-right/2">
        <motion.img
          animate={{ y: [20, -20, 20], transition: { yoyo: Infinity, duration: 2, repeat: Infinity} }}
          src={homeImage}
          alt="no img"
          className="homeImage"
        />
      </motion.div>
    </motion.div>
  );
}

export default Header;
