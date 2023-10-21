import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

function Services() {
  return (
    <Element name="services">
    <motion.div className="w-full h-full services-container bg-gradient-to-r from-white to-gray-100">
      <motion.div className="service-container-upper">
        <h2 className="px-10 py-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Services
        </h2>
        <div className="w-24 h-1 ml-20 rounded opacity-75 bg-primary-300"></div>
      </motion.div>
      <motion.div className="flex items-center justify-center m-6 space-x-6 service-container-middle">
        <motion.div className="p-8 text-justify border-2 border-gray-100 border-solid rounded-md left" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer /> */}
          <h2
            className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            Web App Development
          </h2>
          <p className="text-gray-500 font-extralight">
            Elevate your digital presence with our web app development services. We specialize in MERN stack, Django, Flask, Java, PHP Laravel, Python, JavaScript, ASP.NET, and Android development. From interactive web applications to robust mobile solutions, we bring your ideas to life
          </p>
        </motion.div>
        <motion.div
          className="p-8 text-justify border-2 border-gray-100 border-solid rounded-md middle" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            Machine Learning
          </h2>
          <p className="text-gray-500 font-extralight">
            Dive into the world of machine learning with us. We harness cutting-edge frameworks and technologies such as TensorFlow, PyTorch, scikit-learn, and more to craft data-driven solutions. From predictive analytics to image recognition, we empower businesses with intelligent insights.
          </p>
        </motion.div>
        <motion.div
          className="p-8 text-justify border-2 border-gray-100 border-solid rounded-md right" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            Artificial Intelligence
          </h2>
          <p className="text-gray-500 font-extralight">
            Unlock the potential of artificial intelligence. Our AI projects leverage state-of-the-art frameworks and technologies, including neural networks, natural language processing, and computer vision. Whether you need smart automation or data-driven decision support, we have the expertise.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center justify-center m-6 space-x-6 text-justify service-container-lower">
        <motion.div
          className="p-8 border-2 border-gray-100 border-solid rounded-md left" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer /> */}
          <h2 className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            AI Chatbots
          </h2>
          <p className="text-gray-500 font-extralight">
            Transform customer engagement with AI chatbots. Our chatbot solutions are built on advanced platforms like Langchain, LLM, OpenAI, Lamma, and VectorDbs. Enhance user experiences, provide instant support, and streamline interactions for your business.
          </p>
        </motion.div>
        <motion.div
          className="p-8 text-justify border-2 border-gray-100 border-solid rounded-md middle" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            Tutoring Services
          </h2>
          <p className="text-gray-500 font-extralight">
            Master programming languages and mathematics with our personalized tutoring. We offer guidance in Python, Java, JavaScript, PHP, C++, C#, ASP.NET, C, and various mathematical concepts. Our experienced tutors ensure you grasp the core concepts and excel in your studies or projects.
          </p>
        </motion.div>
        <motion.div
          className="p-8 text-justify border-2 border-gray-100 border-solid rounded-md right" whileHover={{scale:1.01, boxShadow: '0 5px 15px rgba(0,0,0,0.3)', borderRadius:'8px'}}>
          {/* <FaBeer/> */}
          <h2 className="my-4 text-2xl font-thin text-center text-gray-600 heading">
            Consulting and Training
          </h2>
          <p className="text-gray-500 font-extralight">
            Empower your team and clients with our expert consulting and training workshops. We provide in-depth guidance on web app development, machine learning, AI, AI chatbots, and programming languages. Our workshops equip you with the knowledge and skills to excel in the tech industry.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
    </Element>
  );
}

export default Services;
