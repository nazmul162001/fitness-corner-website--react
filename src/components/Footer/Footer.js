import React from 'react';
import './Footer.css';
import logo from '../../images/logo/GoFitLogo (3).png';

const Footer = () => {
  return (
    <footer className="px-10 mt-3 h-28 bg-black text-white flex items-center justify-between flex-col md:flex-row pb-10 md:pb-0">
      <div
        className="img"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-offset="0"
      >
        <img className="" src={logo} alt="" />
      </div>
      <div
        className="copyright-text"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-offset="0"
      >
        <p>
          &copy;copyright 2022, all right reserve{' '}
          <a className="font-mono" href="/">
            {' '}
            &copy; Nazmul
          </a>{' '}
        </p>
      </div>
      <div
        className="link"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-offset="0"
      >
        <a
          className="go-to-top w-10 h-10 flex items-center justify-center rounded-full bg-gray-500"
          href="/"
        >
          &#8593;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
