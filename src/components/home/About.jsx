import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/aboutusImage.jpg";
// import {FaBeer} from 'react-icons/fa'
function About() {
  return (
    <motion.div className="about-container bg-gradient-to-r from-white to-gray-150 h-full">
      <motion.div className="about-container-upper">
        <h2 className="px-10 py-6 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          About Us
        </h2>
        <div className="h-1 bg-primary-300 w-24 opacity-75 rounded ml-16"></div>
      </motion.div>
      <motion.div className="flex items-center justify-center space-x-6 text-center about-container-middle">
        <motion.div className="p-14 left">
          {/* <FaBeer /> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Our Vision
          </h2>
          <p className="text-gray-500 font-extralight text-justify">
            At DevTechMinds, our vision is to empower businesses and individuals with cutting-edge technology solutions that drive innovation and transformation. We believe in the power of technology to shape the future, and we're dedicated to staying at the forefront of the industry, harnessing its potential to solve real-world problems and meet the ever-evolving needs of our clients.
          </p>
        </motion.div>
        <motion.div className="p-14 middle">
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Our Team
          </h2>
          <p className="text-gray-500 font-extralight text-justify">
            Our success is a testament to our exceptional team of experts. Our diverse group of professionals brings a wealth of experience in web development, machine learning, AI, and more. We foster a collaborative environment where creativity, innovation, and dedication thrive. With an unyielding commitment to excellence, our team is the driving force behind our company's success, consistently delivering high-quality results and solutions to our clients.
          </p>
        </motion.div>
        <motion.div className="px-10 right">
          {/* <FaBeer/> */}
          <h2 className=" my-4 text-2xl font-thin text-gray-600 heading">
            Our Mission
          </h2>
          <p className="text-gray-500 font-extralight text-justify">
            As a company, our mission is clear: to provide exceptional, tailor-made solutions that bridge the gap between technology and your objectives. We aim to make advanced technology accessible to all, offering services that cater to businesses of all sizes, from startups to enterprises. By delivering on this mission, we empower our clients to achieve their goals, stay competitive in their industries, and embark on a journey of continual growth and success.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="flex about-container-lower">
        <motion.div className="lower-left p-14 w-1/2">
          <h2 className="text-2xl my-2 font-thin text-gray-600 heading">
            Client-Centric Approach
          </h2>
          <p className="text-gray-500 font-extralight">
            At DevTechMinds, our commitment to our clients is unwavering. We prioritize your unique needs, goals, and challenges. Our client-centric approach ensures that every project is a collaborative journey, where your vision becomes our mission. With open communication, transparency, and a relentless focus on delivering value, we are dedicated to building lasting partnerships that drive your success and satisfaction. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iusto sint obcaecati animi ipsam adipisci, esse illum? Cum, molestiae accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est officia eveniet veniam aliquam amet molestias reprehenderit facere? Modi, commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum repellat tenetur ullam.
          </p>
        </motion.div>
        <motion.div className="lower-right p-14 w-1/2">
          <motion.img src={aboutImage} alt="no img" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
