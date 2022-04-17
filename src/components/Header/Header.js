import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/GoFitLogo (3).png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);


  const handleLogOut = () => {
    signOut(auth);
  };

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
