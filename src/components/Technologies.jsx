import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiFirebase, SiTailwindcss, SiGraphql, SiNextdotjs, SiWordpress, SiFigma } from 'react-icons/si'; 
import { FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiPowerbi, SiHtml5, SiCss3 } from "react-icons/si";
import { DiJavascript, DiPhp, DiDocker } from "react-icons/di";

import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: 0, transition: { duration: duration } },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pd-20 '>
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap justify-center gap-8 mb-20"> {/* Increased gap here */}
                
                {/* First Row of Icons */}
                <motion.div
                    variants={iconVariants(0.5)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(0.6)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiMysql className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(0.7)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <DiPhp className='text-7xl text-green-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(0.8)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(0.9)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiPowerbi className='text-7xl text-yellow-500' />
                </motion.div>

                {/* Second Row of Icons */}
                <motion.div 
                    variants={iconVariants(1)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.1)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiFirebase className='text-7xl text-yellow-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.2)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiTailwindcss className='text-7xl text-teal-400' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.3)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiGraphql className='text-7xl text-purple-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.4)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiNextdotjs className='text-7xl text-white' />
                </motion.div>

                {/* Third Row of Icons */}
                <motion.div 
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiHtml5 className='text-7xl text-orange-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.6)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiCss3 className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.7)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <DiDocker className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.8)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiFigma className='text-7xl text-pink-500' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(1.9)}
                    initial='initial'
                    animate='animate'
                    className="flex items-center justify-center w-1/5">
                    <SiWordpress className='text-7xl text-blue-600' />
                </motion.div>
            </motion.div> 
        </div>
    )
}

export default Technologies;
