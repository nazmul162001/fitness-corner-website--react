import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="services px-10 overflow-x-hidden">
      <div className="services-title relative mb-10">
        <h2 className="text-5xl font-bold text-center pb-2" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          My{' '}
          <span className="font-extrabold" style={{ color: '#74b9ff' }}>
            Services
          </span>{' '}
        </h2>
        <hr className='w-[300px] mx-auto border-orange-500 border-b-2' data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"/>
        <h3 className="text-center text-3xl pt-1 font-semibold text-gray-400" data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
          What I Provided
        </h3>
      </div>
      <div className="our-services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10">
        {
          services.map(service => <SingleService 
          key={service.id}
          service = {service}
          />)
        }
      </div>
    </section>
  );
};

export default Services;
