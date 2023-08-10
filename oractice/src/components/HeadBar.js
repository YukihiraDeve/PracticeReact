import React from 'react';
import logo from '../assets/images/yukihiradev.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#1B3F61] flex flex-col sm:flex-row justify-between items-center py-1 sm:py-1 px-6 sm:px-8 md:px-16">
    <div className="logo mb-2 sm:mb-0">
      <img
        src={logo}
        alt="Logo"
        className="bg-cover bg-lightgray w-[7.4375rem] h-[6.9375rem] flex-shrink-0 sm:w-[5rem] sm:h-[5rem]"
      />
    </div>
    <div className="navigation flex">
      <Link to="/photographie" className="text-white px-4 sm:px-2" style={linkStyle} >Photographie</Link> 
      <a href="#cv" className="text-white px-4 sm:px-2" style={linkStyle}>
        CV
      </a>
      <a href="#contact" className="text-white px-4 sm:px-2" style={linkStyle}>
        Contact
      </a>
    </div>
  </header>
);
};

const linkStyle = {
  width: '15.3125rem',
  height: '1.75rem',
  flexShrink: 0,
  color: '#FFF',
  fontFamily: 'Montserrat',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  ['@media (max-width: 640px)']: { // Tailwind's sm breakpoint
    fontSize: '1.5rem',
    width: '14rem',
  },
};

export default Header;
