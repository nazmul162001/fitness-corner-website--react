import React from 'react';
import './Footer.css';
import logo from '../../images/logo/GoFitLogo (3).png'

const Footer = () => {
  return (
    <footer className='px-10 mt-3 h-28 bg-black text-white flex items-center justify-between flex-col md:flex-row pb-10 md:pb-0'>
      <img className='' src= {logo} alt="" />
      <p>&copy;copyright 2022, all right reserve <a className='font-mono' href="/"> &copy; Nazmul</a> </p>
      <a className='go-to-top w-10 h-10 flex items-center justify-center rounded-full bg-gray-500' href="/">&#8593;</a>
    </footer>
  );
};

export default Footer;