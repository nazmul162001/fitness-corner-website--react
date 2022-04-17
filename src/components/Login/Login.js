import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [err, setErr] = useState('');


  if(user){
    navigate('/')
  }

  // handle signIn 
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password)
    .then(res => {
      const user = res.user;
      console.log(user);
    })
    .catch(error => {
      setErr('user not found, please signUP or input valid info')
    })
  }

  return (
    <div className="w-100 mt-24">
      <div className="login flex justify-center items-center">
        <form onSubmit={handleSignIn} className="w-[50%]">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
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
              placeholder="password"
              required
            ></input>
            <p className="text-red-500 text-sm italic">
              {err}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn btn-link">
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
          <p>
            New here?{' '}
            <button
              onClick={() => navigate('/register')}
              className="btn btn-link text-blue-700 font-bold"
            >
              Sign Up
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

export default Login;
