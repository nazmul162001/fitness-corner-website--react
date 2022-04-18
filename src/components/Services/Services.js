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
    <section className="services px-10">
      <div className="services-title relative mb-10">
        <h2 className="text-5xl font-bold text-center pb-2">
          Our{' '}
          <span className="font-extrabold" style={{ color: '#74b9ff' }}>
            Services
          </span>{' '}
        </h2>
        <hr className='w-[300px] mx-auto border-orange-500 border-b-2' />
        <h3 className="text-center text-3xl pt-1 font-semibold text-gray-400">
          What We Provided
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
