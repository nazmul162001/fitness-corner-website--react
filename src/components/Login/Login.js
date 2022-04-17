import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [err, setErr] = useState('');

  // google SignIn
  const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);

  let errorMessage;
  if(error){
    errorMessage = <p className='text-red-500 italic'>{'Login failed, please try again'} </p>
  }

  // for require auth
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  //handle reset password
  const handleResetPassword = () => {
    if (!email) {
      toast.error('Please input email')
    }
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success('email sent ! Check inbox')
    });
  };


  // handle signIn
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        setErr('user not found, please signUP or input valid info');
      });
  };

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
              onChange={(e) => setEmail(e.target.value)}
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
            <p className="text-red-500 text-sm italic">{err}</p>
            {errorMessage}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn btn-link">
              Log In
            </button>
            <span
              onClick={handleResetPassword}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
            >
              Forgot Password?
            </span>
          </div>
          <p className='my-3'>
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
      <div className="social-login flex wrapper flex-col md:flex-row justify-center text-white mt-5">
        <button onClick={() => signInWithGoogle()} className="py-2 px-10 bg-slate-800 mx-8 md:mx-2 rounded-full flex items-center justify-center md:justify-between text-xl">
          <FcGoogle className=' mx-5 md:mx-2 text-4xl' />  Sign In with Google
        </button>
        <button className="py-2 px-10 bg-slate-800 mx-8 md:mx-2 rounded-full flex items-center justify-center md:justify-between text-xl">
          <FcGoogle className=' mx-5 md:mx-2 text-4xl' />  Sign In with Github
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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

export default Login;
