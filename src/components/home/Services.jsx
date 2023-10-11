import React from "react";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div className="w-full services-container bg-gradient-to-r from-white to-gray-100">
      <motion.div className="container-upper">
        <h2 className="px-10 py-6 text-3xl font-light text-gray-700 heading">
          Services
        </h2>
      </motion.div>
      <motion.div className="flex items-center justify-center m-6 space-x-6 container-middle">
        <motion.div className="p-8 border-2 border-gray-100 border-solid rounded-md left" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer /> */}
          <h2
            className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md middle" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md right" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center justify-center m-6 space-x-6 container-middle">
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md left" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer /> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md middle" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md right" whileHover={{scale:1.06, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
            Creative Design
          </h2>
          <p className="text-gray-500 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non
            asperiores quam nulla delectus maxime consequatur excepturi
            distinctio atque?
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
