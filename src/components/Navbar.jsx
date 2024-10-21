import React from 'react';
import logo from '../assets/Mylogo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Navbar = ({ setCurrentComponent }) => { // Accept setCurrentComponent as a prop
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className="w-31 h-11 object-contain mx-2" />
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      

        {/* Contact Us button that sets current component to 'contact' */}
        <button onClick={() => setCurrentComponent('contact')} className="flex items-center gap-2">
          <FaPhoneAlt /> <span>Contact Us</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
