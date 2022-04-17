import React from 'react';
import notFound from '../../images/not-found/404_page_cover.jpg'

const NotFound = () => {
  return (
    <div className='not-found'>
      <img className='w-[100%] h-[90vh]' src= {notFound} alt="" />
    </div>
  );
};

export default NotFound;