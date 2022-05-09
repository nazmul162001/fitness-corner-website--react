import React from 'react';
import './HomePage.css';
import banner from '../../images/banner/banner.png';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import WhyChooseUs from '../WhyChoosUs/WhyChooseUs';
import { Link } from 'react-router-dom';
// // aos
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

const HomePage = () => {

  // AOS.init({
  //   // // Global settings:
  //   // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //   // initClassName: 'aos-init', // class applied after initialization
  //   // animatedClassName: 'aos-animate', // class applied on animation
  //   // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //   // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //   // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //   // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
  //   // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //   // offset: 120, // offset (in px) from the original trigger point
  //   // delay: 0, // values from 0 to 3000, with step 50ms
  //   duration: 2000, // values from 0 to 3000, with step 50ms
  //   // easing: 'ease', // default easing for AOS animations
  //   // once: false, // whether animation should happen only once - while scrolling down
  //   // mirror: false, // whether elements should animate out while scrolling past them
  //   // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  // });
  
  
  return (
    <>
      <section className="banner grid grid-cols-1 md:grid-cols-2 px-10 pt-5 text-center overflow-x-hidden">
        <div className="banner-img" data-aos="fade-right">
          <img src={banner} alt="" />
        </div>
        <div className="banner-content relative text-emerald-400 md:text-white px-5 text-left" data-aos="fade-left">
          <span className="text-2xl">I am a</span>
          <h1 className="text-5xl py-2 font-bold">Gym Trainer</h1>
          <h2 className="text-2xl">
            From Dhaka, Bangladesh. Doing Gym is good <br></br> for healthy
            life. It helps our Body to fit.It release <br></br> stress from our
            mind.
          </h2>
          <Link
            to='/login'
            type="button"
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-10 mt-3 rounded-full font-bold"
          >
            Join Us
          </Link>
        </div>
      </section>
      {/* Services section  */}
      <Services />

      {/* why choose us  */}
      <WhyChooseUs />
    </>
  );
};

export default HomePage;
