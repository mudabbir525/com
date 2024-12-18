import React from 'react';
import about from '../assets/Mylogo.png'; // Consider updating this image to something representative of your company
import { ABOUT_TEXT } from '../constants'; // Ensure this text is relevant to your company
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pd-4'>
            <h2 className='my-20 text-center text-4xl'>
                About <span>WebHostDevs</span>
            </h2>
            <div className="flex flex-wrap">
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={about} alt="About WebHostDevs" /> {/* Update alt text */}
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2"
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            {ABOUT_TEXT} {/* Update this constant in constants/index.js */}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
