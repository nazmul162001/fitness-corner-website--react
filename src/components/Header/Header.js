import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo/GoFitLogo (3).png';
import './Header.css';

const Header = () => {
  return (
    <nav className="bg-black text-white h-20 flex items-center justify-between px-10 sticky top-0 z-10">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="nav-menu">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/checkout"
        >
          Checkout
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/Blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/About"
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/Login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
