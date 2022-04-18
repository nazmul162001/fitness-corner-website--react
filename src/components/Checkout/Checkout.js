import React from 'react';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

  const handleCheckout = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    const name = e.target.name.value;
    const contact = e.target.contact.value;
    const address = e.target.address.value;

    if(email && name && contact && address){
      toast.success("Thank You for the Booking")
    }
  }

  return (
    <div className="w-100 pt-5 checkout-page">
      <h2 className="text-center text-4xl font-mono text-white">
        Fill out this form
      </h2>
      <h3 className="text-center text-2xl font-mono text-white mb-4">
        To Confirm your Booking
      </h3>
      <div className="login flex justify-center items-center">
        <form onSubmit={handleCheckout} className="w-[80%] md:w-[60%] lg:w-[40%] form-container py-5 px-12 rounded-lg bg-slate-700">
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            ></input>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            ></input>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="address"
            >
              address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
              id="address"
              type="text"
              name="address"
              placeholder="Enter your address"
              required
            ></input>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-white"
              htmlFor="tel"
            >
              Contact No:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black"
              id="tel"
              type="tel"
              name="contact"
              placeholder="Enter your Phone Number"
              required
            ></input>
          </div>

          <div className="shift flex justify-between py-3 ">
            <label className='text-white' htmlFor="cars">Choose Your Shift:</label>
            <select id="shift" name="shift">
              <option value="volvo">Morning</option>
              <option value="saab">Afternoon</option>
              <option value="opel">Evening</option>
              <option value="audi">Night</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn btn-link w-[100%]">
              Booking
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Checkout;
