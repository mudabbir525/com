import React from "react";
import { FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ name, role, expertise, image, socialLinks }) => (
  <div className="team-member text-center hover:shadow-lg hover:shadow-gray-500/50 bg-gradient-to-b from-[#00071c] to-[#000000] rounded-lg p-4 m-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img
      src={image}
      alt={name}
      className="rounded-full w-32 h-32 mx-auto mb-2 border-2 border-[#ffffff] object-cover"
    />
    <h3 className="text-xl font-bold text-[#f1f1f1]">{name}</h3>
    <p className="text-lg text-[#f1f1f1]">{role}</p>
    <p className="text-sm text-[#f1f1f1] italic mb-2">{expertise}</p>
    <div className="social-links flex justify-center">
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          key={index}
          className="text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Mudabbir Pasha",
      role: "CEO & Founder",
      expertise: "Full Stack Development, MERN Stack",
      image: "src/assets/11.jpeg", // Your image path
      socialLinks: [
        { url: "https://www.linkedin.com/in/mohammed-mudabbir-pasha/", icon: <FaLinkedin size={24} color="#ffffff" /> }, // White LinkedIn icon
      ],
    },
    {
      name: "Siddesh",
      role: "Co-Founder",
      expertise: "Full Stack Development, MERN Stack",
      image: "src/assets/22.jpeg", // Siddesh's image path
      socialLinks: [
        { url: "https://www.linkedin.com/in/siddesh7077/", icon: <FaLinkedin size={24} color="#ffffff" /> }, // White LinkedIn icon
      ],
    },
    // Add more team members up to 20
  ];

  return (
    <div className="team-page py-10">
      <h2 className="text-4xl text-center text-[#F6F6F6] mb-8">
        Meet Our Team
      </h2>
      <div className="container mx-auto flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
