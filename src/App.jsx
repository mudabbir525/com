import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';   
import { motion } from 'framer-motion';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';
import Team from './components/Team';

const App = () => {
  return (
    <Router>
      <div className='overflow-hidden text-[#F6F6F6] antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-gradient-to-b from-[#00071c] to-[#000000]'>
        <Canvas camera={{ position: [0, 0, 5] }} className="fixed top-0 left-0 z-[-1] w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color={'#4ED1B2'} />
          </Sphere>
          <OrbitControls />
        </Canvas>

        <div className="container mx-auto px-8 relative z-10 my-0">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Analytics />
        </div>
      </div>
    </Router>
  );
}

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Services />
      <Technologies />
      <Projects />
      <div className="mt-8 flex flex-col items-center text-center">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-10 text-center text-4xl'>
            Get in Touch!
        </motion.h2>
        <Link to="/contact">
          <button className="mt-4 p-2 bg-purple-700 text-white justify-center rounded">Contact Us</button>
        </Link>
      </div>
      <div className="h-14"></div>
    </>
  );
};

export default App;
