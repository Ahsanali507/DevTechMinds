import React from "react";
import { motion } from "framer-motion";
import featuresImage from "../../assets/featuresImage.png";
import solutionsImage from "../../assets/solutions.png";
import businessImage from "../../assets/businessImage.png";
import { Element } from "react-scroll";

function Features() {
  return (
    <Element name="features">
    <motion.div className="features-container">
      <motion.div className="w-full h-screen features-subcontainer1 bg-gradient-to-r from-white to-gray-150">
        <motion.div className="w-full container-upper">
          <h2 className="px-10 py-6 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Features
          </h2>
          <div className="w-24 h-1 mx-auto ml-16 rounded opacity-75 bg-primary-300"></div>
        </motion.div>
        <motion.div className="flex items-center w-full feature-container-lower">
          <motion.div className="w-1/2 lower-left p-14">
            <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
              Our Comprehensive Service Offerings - Elevate Your Tech Journey
            </h2>
            <p className="text-gray-500 font-extralight">
              Explore the diverse range of services offered by our software
              company, each designed to deliver exceptional results and drive
              your success. From cutting-edge web development projects and
              data-driven machine learning solutions to innovative AI projects
              and chatbots, we have the expertise to meet your every need.
              Additionally, our personalized tutoring services empower
              individuals to master programming languages and mathematics.
            </p>
          </motion.div>
          <motion.div className="flex items-center justify-center rounded-full lower-right p-14 w-96 ml-36 h-96 bg-cyan-500">
            <motion.img
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              className="h-80 w-80"
              src={featuresImage}
              alt="no img"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center w-full h-screen features-subcontainer2 bg-gradient-to-r from-white to-gray-100">
        <motion.div className="flex items-center w-full feature-container-lower">
          <motion.div className="flex items-center justify-center ml-16 rounded-full lower-right p-14 w-96 h-96 bg-cyan-500">
            <motion.img
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              className="h-80 w-80"
              src={solutionsImage}
              alt="no img"
            />
          </motion.div>
        </motion.div>
        <motion.div className="feature-container-lower-left p-14 ">
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Achieve Technological Excellence - Your Success, <br /> Our Priority
          </h2>
          <p className="text-gray-500 font-extralight">
            Our commitment to technological excellence is evident in every facet
            of our services. Whether it's developing web applications, delving
            into machine learning, or exploring the possibilities of artificial
            intelligence, we prioritize your success. With cross-platform
            compatibility and user-centric design, our web app development
            projects deliver immersive user experiences. We ensure scalability,
            security, and optimized performance to future-proof your
            applications.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center w-full h-screen features-subcontainer3 bg-gradient-to-r from-white to-gray-150">
        <motion.div className="flex items-center w-full feature-container-lower">
          <motion.div className="w-1/2 lower-left p-14">
            <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
              Pioneering Machine Learning Solutions - Uncover the Power of Data
            </h2>
            <p className="text-gray-500 font-extralight">
              At the heart of our machine learning projects lies a dedication to
              data-driven insights. We excel in custom model development,
              predictive analytics, and seamless integration into your existing
              systems. Count on us for continuous support and expertise in
              frameworks like TensorFlow, PyTorch, scikit-learn, and more. Your
              data isn't just a collection of numbers; it's the foundation of
              intelligent, informed decisions that drive your business forward.
            </p>
          </motion.div>
          <motion.div className="flex items-center justify-center rounded-full lower-right p-14 w-96 ml-36 h-96 bg-cyan-500">
            <motion.img
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              transition={{
                duration: 2,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              className="h-80 w-80"
              src={businessImage}
              alt="no img"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    </Element>
  );
}

export default Features;
