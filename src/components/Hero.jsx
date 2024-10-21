import { HERO_CONTENT } from "../constants/index"; // Ensure this content reflects your company's services
import Profile from '../assets/Mylogo.png'; // You may want to update this with your company logo or an appropriate image
import { motion } from "framer-motion";

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
                        <motion.button
                            onClick={() => setCurrentComponent('contact')}  // Switch to contact page
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                            className="mt-4 inline-block rounded bg-purple-700 px-4 py-2 text-white transition-transform transform hover:scale-105"
                        >
                            Get Started
                        </motion.button>

                    </div>
                </div>
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
