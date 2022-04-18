import React from 'react';
import './About.css';
import profile from '../../images/profile.png';

const About = () => {
  return (
    <div className="about-me bg-gradient-to-r from-blue-700 to-emerald-500 w-100 h-screen">
      <h1 className="text-center text-5xl relative z-10 font-bold text-slate-300 py-5">
        About Me
      </h1>
      <div className="about-info rounded-2xl grid grid-cols-1 md:grid-cols-2 justify-between items-center px-10 relative z-20">
        <div className="personal-info text-white pr-0 md:pr-16">
          <h2 className="text-5xl">I AM NAZMUL HASAN</h2>
          <h3 className="text-3xl">Junior Front-End Developer</h3>
          <p className="text-xl py-3">
            I'am currently Learning React. My Goal is to becoome a professional
            junior web-developer. Hopefully in the next 4 to 5 month I will be
            able to reach my Goal.
          </p>
          <button
            type="button"
            class=" text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-5 rounded-lg my-3"
          >
            Let's Me Some Guide
          </button>

          <div className="goal p-3 mt-3">
            <p>
              {' '}
              <strong className="text-xl italic">My Current Skill:</strong>{' '}
            </p>
            <p className="text-xl">
              HTML, CSS, Bootstrap, Tailwind, Javascript, React, React router,
              Firebase
            </p>
            <p>
              {' '}
              <strong className="text-xl italic">
                Next 3 Month Learning Goal:
              </strong>{' '}
            </p>
            <p className="text-xl">NodeJs, MongoDB, ExpressJs</p>
          </div>
        </div>
        <div className="personal-image flex justify-center items-center">
          <img
            className="relative z-10 rounded-2xl my-10"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
