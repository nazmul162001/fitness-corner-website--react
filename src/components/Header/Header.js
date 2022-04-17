import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/GoFitLogo (3).png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false)

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-black text-white h-20 flex items-center justify-between px-10 sticky top-0 z-10">
      {/* Responsive menu  */}
      <div
        onClick={() => setOpen(!open)}
        className="humberger-menu w-10 h-10 absolute top-3 right-3 md:hidden z-50"
      >
        {open ? <XIcon /> : <MenuAlt1Icon />}
      </div>

      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className={`nav-container flex flex-col md:flex-row justify-evenly text-center md:justify-end md:items-center pt-16 md:pt-0 bg-slate-700 md:bg-black w-9/12 md:w-full h-screen md:h-16 absolute top-0 md:static duration-300 ease-in-out ${
          open ? 'left-0' : 'left-[-5000px]'
        }`}>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/"
        >
          Home
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

        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/Login"
          >
            LogOut
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/Login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
