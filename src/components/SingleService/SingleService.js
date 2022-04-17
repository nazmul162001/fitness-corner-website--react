import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
  const {name, price, description, img} = service;
  const navigate = useNavigate();
  return (
    <div className='service-container rounded-md p-8'>
      <img className='rounded-2xl' src= {img} alt="" />
      <h2 className='text-2xl'> {name} </h2>
      <p className='text-gray-500'> {description.slice(0, 100)} </p>
      <h2 className='text-4xl font-bold'> ${price} </h2>
      <button onClick={() => navigate('/checkout')} className='w-[100%] py-2 rounded-md text-white  bg-slate-500 my-2'>Checkout</button>
    </div>
  );
};

export default SingleService;