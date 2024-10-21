import React from 'react';
import { motion } from 'framer-motion';


const services = [
  { title: 'Web Development', description: 'Building responsive and dynamic websites.' },
  { title: 'UI/UX Design', description: 'Designing intuitive user interfaces and experiences.' },
  { title: 'Mobile App Development', description: 'Developing apps for iOS and Android platforms.' },
  { title: 'SEO Optimization', description: 'Improving website visibility on search engines.' },
  { title: 'E-commerce Solutions', description: 'Creating scalable e-commerce platforms.' },
  { title: 'WordPress Development', description: 'Building websites using WordPress.' },
  { title: 'Backend Development', description: 'Server-side development and database management.' },
  { title: 'Website Maintenance & Support', description: 'Ongoing updates and security checks.' },
  { title: 'API Integration', description: 'Integrating third-party services and APIs.' },
];

const hoverEffect = {
  rest: { scale: 1, rotateY: 0 },
  hover: { scale: 1.05, rotateY: 15 },
};

const Services = () => {
  return (
    <div className='min-h-screen  p-8 text-white'>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-center text-5xl font-bold mb-16'
      >
        Our Services
      </motion.h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service, index) => (
         <motion.div
  key={index}
  variants={hoverEffect}
  initial="rest"
  whileHover="hover"
  animate="rest"
  transition={{ duration: 0.3 }}
  className='hover:shadow-lg hover:shadow-gray-500/50 bg-gradient-to-b from-[#00071c] to-[#000000] p-8 rounded-xl text-center transform-gpu hover:shadow-2xl hover:cursor-pointer'
>
            <motion.h2 className='text-2xl font-semibold mb-4'>{service.title}</motion.h2>
            <p className='text-gray-300'>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
