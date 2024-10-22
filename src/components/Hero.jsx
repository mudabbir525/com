import { HERO_CONTENT } from "../constants/index"; 
import Profile from '../assets/mylogo.png'; // change it
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = ({ setCurrentComponent }) =>{
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                        >
                            WebHostDevs
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Your Go-To Web Development Solution!
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT} {/* Update this content in constants/index.js */}
                        </motion.p>
                        <Link to="/contact">
                        <motion.button
                            onClick={() => setCurrentComponent('contact')}  // Switch to contact page
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                            className="mt-4 mb-5 inline-block rounded bg-purple-700 px-4 py-2 text-white transition-transform transform hover:scale-105"
                        >
                            Get Started
                        </motion.button>
                            </Link>

                    </div>
                </div>
                <br />
                <br />
                <br />
                
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            src={Profile} alt="WebHostDevs" /> {/* Change alt text to reflect your brand */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
