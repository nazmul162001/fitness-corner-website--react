import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true} );

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
    if(password.length < 6){
      setErr('password must be 6 or more character')
      return
    }
    createUserWithEmailAndPassword(email, password);
    // console.log(email, password, confirmPassword);
    setErr('');
    alert('email sent')
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
            <p className="text-red-500 text-xs italic">{err}</p>
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
      <div className="social-login text-center text-white">
        <button className="py-2 px-10 bg-cyan-600 m-2 rounded-full">
          Sign In with Google
        </button>
        <button className="py-2 px-10 bg-cyan-600 m-2 rounded-full">
          Sign In with Github
        </button>
      </div>
    </div>
  );
};

export default Register;
