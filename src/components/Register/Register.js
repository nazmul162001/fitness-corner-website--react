import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // handleGoogleSignUp
  // google SignIn
  const [signInWithGoogle, googleUser, loading2, error2] =
    useSignInWithGoogle(auth);

  let errorMessage;
  if (error2) {
    errorMessage = (
      <p className="text-red-500 italic">{error2.message} </p>
    );
  }

    // for require auth
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  // handle signUp
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setErr('password do not matched');
      return;
    }
    if (password.length < 6) {
      setErr('password must be 6 or more character');
      return;
    }
    createUserWithEmailAndPassword(email, password);
    // console.log(email, password, confirmPassword);
    setErr('');
    navigate(from, { replace: true });
  };

  return (
    <div className="w-100 mt-24">
      <div className="login flex justify-center items-center">
        <form onSubmit={handleSignUp} className="w-[50%]">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="password"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              required
            ></input>
            <p className="text-red-500 text-xl italic">{err}</p>
            <p className="text-red-500 text-xl italic"> {errorMessage} </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn btn-link">
              Sign Up
            </button>
          </div>
          <p>
            Already a member?{' '}
            <button
              onClick={() => navigate('/login')}
              className="btn btn-link text-blue-700 font-bold"
            >
              Login
            </button>{' '}
          </p>
        </form>
      </div>
      <div className="devider m-auto flex justify-center items-center">
        <div className="w-64 h-1 bg-gray-400"></div>
        <span className="px-3 text-xl">or</span>
        <div className="w-64 h-1 bg-gray-400"></div>
      </div>
      <div className="social-login flex justify-center text-white">
        <button
          onClick={() => signInWithGoogle()}
          className="py-2 px-10 bg-slate-800 mx-8 md:mx-2 rounded-full flex items-center justify-center text-xl mb-3 md:mb-0"
        >
          <FcGoogle className=" mx-5 md:mx-2 text-4xl" /> Sign In with Google
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;
