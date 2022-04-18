import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='blogs-section relative pb-10'>
      <h2 className='text-center text-4xl font-mono font-bold py-3'>My Blogs</h2>
      <hr className='w-[200px] mx-auto border-b-2 border-black mb-1' />
      <hr className='w-[150px] mx-auto border-b-2 border-black mb-1' />
      <hr className='w-[100px] mx-auto border-b-2 border-black mb-1' />
      <div className="simantic-element pt-12 px-5">
        <h1 className="text-3xl font-mono">Q1.Difference between Authorization & Authentication?</h1>
        <p className="text-xl text-gray-500 md:pl-10">
        <strong className='font-extrabold text-black'>Authentication:</strong> Authentication is the act of validation that users are whom they claim to be. This is the first step in any security process.
        <li><strong>Password:</strong> Username and password are the most common authentications factor.If user enters the correct datam the system assumes the identity is valid and grants access.</li>
        <li><strong>One-time pins:</strong> Grant access for only one session or transaction.</li>
        <li><strong>Authentication apps:</strong>Generate security codes via an outside party that grants access.</li>
        <strong className='font-extrabold text-black'> Authorization:</strong>Authorization in a system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.In secure environments, authorization must always follow authentication. Users should first prove that their identities are genuine before an organizations administrators grant them access to the requested resources.
        </p>
        <h1 className="text-3xl font-mono mt-5">
          Q2.Why are you using firebase? What other options do you have to implement authentication?
          <p className="text-xl text-gray-500 md:pl-10">
            I using firebase because Firebase has the best documentation and has good support in case i am stuck somewhere. And also It is free for small and experimental projects and i can pay as i go if the project grows linearly. I can implement a lot of features in less time with small code.
            There are many alternative for firebase authentication, like- MongoDB, AuthO, Okta, Passport, JSON Web Token etc.
          </p>
        </h1>
        <h1 className="text-3xl font-mono mt-5">
          Q3.What other service does firebase provide other than Authentication?
        </h1>
        <p className="text-xl text-gray-500 md:pl-10">
        Firebase ডেভেলপারদের কাজ সহজ করার জন্য বিভিন্ন ধরনের tools এবং services provide করে থাকে। তার মধ্যে অন্যতম একটি সার্ভিস হল user authentication. তবে এর বাইরেও Firebase আমাদের কে অনেক ধরনের সার্ভিস দিয়ে থাকে, যেমন- Firebase Hosting, Cloud Storage, Cloud Firestore, Firebase Realtime Database,  Google analytics, Cloud Messaging আরো অনেক কিছু।
        </p>

      </div>
    </div>
  );
};

export default Blogs;
