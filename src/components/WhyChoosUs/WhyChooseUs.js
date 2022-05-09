import React from 'react';
import './WhyChooseUs.css';
import cost from '../../images/icon-low-cost.png';
import support from '../../images/support.png';
import gurantee from '../../images/gyrantee.png';

const WhyChooseUs = () => {
  
  return (
    <div className="choose-us my-5 px-10">
      <h2 className="text-center text-4xl pb-2">Why Choose Me</h2>
      <hr className="w-[250px] border-b-2 border-black mx-auto" />
      <p className="text-center font-mono font-bold text-xl pb-5">
        Here are some Benefits for Choosing Me
      </p>

      <div className="our-benefit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
        <div className="cost">
          <img src={cost} alt="" />
          <h2 className="text-3xl font-medium">LOW COST</h2>
          <p>
            A pricing strategy in which a company offers a relatively low price
            to stimulate demand and gain market share. It is one of three
            generic marketing strategies (see differentiation strategy and focus
            strategy for the other two) that can be adopted by any company, and
            is usually employed where the product has few or no competitive
            advantage or where economies of scale are achievable with higher
            production volumes.
          </p>
        </div>
        <div className="cost">
          <img src={support} alt="" />
          <h2 className="text-3xl font-medium">24/7 SUPPORT</h2>
          <p>
            Demand for 24/7 support is almost certainly going to come as your
            business becomes successful — scaling up beyond its initial
            audiences and markets. In fact, nearly half of customers consider
            24/7 support, in real-time a top component of good customer service, One of my constant arguments with technicians is about the “requirement” for after hours work. It is only under truly extreme circumstances that you need to work after 6PM on regular business days. That is a fact.{' '}
          </p>
        </div>
        <div className="cost">
          <img src={gurantee} alt="" />
          <h2 className="text-3xl font-medium">Satisfaction Gurantee</h2>
          <p>
            We are not even guessing here. You must you have had such
            conversations before going on a shopping spree. And that is how it
            should be. As a customer, finding yourself the best deals is your
            right! But as a business owner, you are on the other side of the
            table. You need to give customers the best deals to choose from and
            keep them satisfied. And you want to ensure their satisfaction is
            guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
