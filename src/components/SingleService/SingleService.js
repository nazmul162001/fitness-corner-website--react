import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {
  const {name, price, description, img} = service;
  const navigate = useNavigate();
  return (
    <div className='service-container rounded-md p-8 text-left'>
      <img className='rounded-2xl h-[250px]' src= {img} alt="" />
      <h2 className='text-2xl'> {name} </h2>
      <p className='text-gray-500'> {description.slice(0, 200)} </p>
      <h2 className='text-2xl font-medium font-mono py-2'>Price: ${price} </h2>
      <button onClick={() => navigate('/checkout')} className='w-[100%] py-2 rounded-md text-black border-slate-300 border-2 hover:text-white hover:bg-slate-500 my-2'>Checkout</button>
    </div>
  );
};

export default SingleService;