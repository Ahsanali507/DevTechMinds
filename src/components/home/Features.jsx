import React from "react";
import { motion } from "framer-motion";
import featuresImage from "../../assets/featuresImage.png";
import solutionsImage from '../../assets/solutions.png';
import businessImage from '../../assets/businessImage.png'


function Features() {
  return (
    <motion.div className="features-container">
      <motion.div className="features-subcontainer1 bg-gradient-to-r from-white to-gray-150 h-screen w-full">
        <motion.div className="container-upper w-full">
          <h2 className="px-10 py-6 text-3xl font-light text-gray-700 heading">
            Features
          </h2>
        </motion.div>
        <motion.div className="flex container-lower w-full items-center">
          <motion.div className="lower-left p-14 w-1/2">
            <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
              Better And Best Solutions <br /> For Small Businesses
            </h2>
            <p className="text-gray-500 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
              asperiores quam nulla delectus maxime consequatur excepturi
              distinctio atque? Lorem ipsum dolor sit amet consectetur liquam
              esse at laborum harum vero maxime modi Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. At, quaerat.. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum dicta, voluptates
              distinctio natus quidem animi?
            </p>
          </motion.div>
          <motion.div className="lower-right p-14 w-96 ml-36  h-96 bg-cyan-500 rounded-full flex justify-center items-center">
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
      <motion.div className="features-subcontainer2 bg-gradient-to-r from-white to-gray-100 h-screen w-full flex items-center">
        <motion.div className="flex container-lower w-full items-center">
          <motion.div className="lower-right p-14 w-96 ml-16  h-96 bg-cyan-500 rounded-full flex justify-center items-center">
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
        <motion.div className="lower-left p-14 ">
            <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
              Better And Best Solutions <br /> For Small Businesses
            </h2>
            <p className="text-gray-500 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
              asperiores quam nulla delectus maxime consequatur excepturi
              distinctio atque? Lorem ipsum dolor sit amet consectetur liquam
              esse at laborum harum vero maxime modi Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. At, quaerat.. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum dicta, voluptates
              distinctio natus quidem animi?
            </p>
          </motion.div>
      </motion.div>
      <motion.div className="features-subcontainer3 bg-gradient-to-r from-white to-gray-150 h-screen w-full flex items-center">
        <motion.div className="flex container-lower w-full items-center">
          <motion.div className="lower-left p-14 w-1/2">
            <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
              Better And Best Solutions <br /> For Small Businesses
            </h2>
            <p className="text-gray-500 font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
              asperiores quam nulla delectus maxime consequatur excepturi
              distinctio atque? Lorem ipsum dolor sit amet consectetur liquam
              esse at laborum harum vero maxime modi Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. At, quaerat.. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum dicta, voluptates
              distinctio natus quidem animi?
            </p>
          </motion.div>
          <motion.div className="lower-right p-14 w-96 ml-36  h-96 bg-cyan-500 rounded-full flex justify-center items-center">
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
  );
}

export default Features;
