import React from 'react';
import './HomePage.css';
import banner from '../../images/banner/banner.png';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <>
      <section className='banner grid grid-cols-1 md:grid-cols-2 px-10 pt-5 text-center'>
        <div className="banner-img">
          <img src= {banner} alt="" />
        </div>
        <div className="banner-content relative text-emerald-400 md:text-white px-5 text-left">
          <span className='text-2xl'>I am a</span>
          <h1 className='text-5xl py-2 font-bold'>Gym Trainer</h1>
          <h2 className='text-2xl'>From Dhaka, Bangladesh. Doing Gym is good <br></br> for healthy life. It helps our Body to fit.It release <br></br> stress from our mind.</h2>
        </div>
      </section>
      {/* Services section  */}
      <Services />

      {/* Footer  */}
      <Footer></Footer>
    </>
  );
};

export default HomePage;
