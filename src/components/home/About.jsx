import React from 'react'
import {motion} from 'framer-motion'
import aboutImage from '../../assets/aboutImage.jpg'
// import {FaBeer} from 'react-icons/fa'
function About() {
  return (
    <motion.div className="about-container bg-gradient-to-r from-white to-gray-150">
        <motion.div className="container-upper">
            <h2 className="px-10 py-6 text-3xl font-light text-gray-700 heading">
                About Us
            </h2>
        </motion.div>
        <motion.div className="flex items-center justify-center space-x-6 text-center container-middle">
            <motion.div className="p-14 left">
                {/* <FaBeer /> */}
                <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
                    Creative Design
                </h2>
                <p className='text-gray-500 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non asperiores quam nulla delectus maxime consequatur excepturi distinctio atque?</p>
            </motion.div>
            <motion.div className="p-14 middle">
            {/* <FaBeer/> */}
                <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
                    Creative Design
                </h2>
                <p className='text-gray-500 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non asperiores quam nulla delectus maxime consequatur excepturi distinctio atque?</p>
            </motion.div>
            <motion.div className="p-14 right">
            {/* <FaBeer/> */}
                <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
                    Creative Design
                </h2>
                <p className='text-gray-500 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non asperiores quam nulla delectus maxime consequatur excepturi distinctio atque?</p>
            </motion.div>
        </motion.div>
        <motion.div className="flex container-lower">
            <motion.div className="lower-left p-14">
                <h2 className="my-4 text-2xl font-thin text-gray-600 heading">
                    Better And Best Solutions <br /> For Small Businesses
                </h2>
                <p className='text-gray-500 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.hic non asperiores quam nulla delectus maxime consequatur excepturi distinctio atque? Lorem ipsum dolor sit amet consectetur liquam esse at laborum harum vero maxime modi Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, quaerat..</p>
            </motion.div>
            <motion.div className="lower-right p-14">
                <motion.img src={aboutImage} alt="no img" />
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About