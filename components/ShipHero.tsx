'use client'
import React, { useState } from 'react';

const ShipHero : React.FC = () => {
  const [email, setEmail] = useState('');

  const handleShip_NowSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Implement email subscription logic here (e.g., send to API)
    console.log('Email submitted:', email);
    setEmail('');
  };






  return (
    <section className=" ">
    <h1 className='text-center bold-20'>R-ZONE SHIPPING SERVICE</h1>
    <div className='grid grid-flow-dense grid-col-2 grid-row-2 relative flex-1 flex-col mt-20 xl:w-1/2 md:flex-row'>
    <div className="flex box-border h-50 w-100 p-4 border-2 shadow-lg border-l-blue-300">
            <h2 className='text-blue-700 bold-20 uppercase'>START SHIPPING TODAY</h2>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <form onSubmit={handleShip_NowSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter Your Location"
              className="px-3 py-2 rounded-lg focus:outline-none ring ring-blue-500 mr-2 border-x-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
        </div>
        <div className="flex box-border h-50 w-100 p-4 border-2 shadow-lg relative flex-1 flex-col xl:w-1/2">
          <h2 className='bold-20'>Learn more</h2>
          <div className="relative flex flex-1 flex-col xl:w-1/2 xl:flex-row">
  <div className="flex-auto box-border h-50 w-100 p-4 border-2 shadow-lg">
  <h2 className='bold-20'>Family Package Shipping</h2>
  <p className='text-gray-500 text-text:justify'>R-Zone Cargo's Family Business Package offers affordable,reliable shipping tailored for family-owned businesses to thrive globally.
    </p>
    </div>
  <div className="flex-auto box-border h-50 w-100 p-4 border-2 shadow-lg">
   <h2 className='bold-20'>Small Businesses Package</h2>
   <p className='text-gray-500 text-text:justify'>Our Small Business Package: Affordable, reliable shipping tailored to help small businesses thrive globally.
    </p>
  </div>
  <div className="flex-auto box-border h-50 w-100 p-4 border-2 shadow-lg">
  <h2 className='bold-20'>R-Zone For Business</h2>
   <p className='text-gray-500 text-text:justify'>R-Zone for Business: Tailored logistics solutions ensuring fast, affordable shipping, empowering small businesses to thrive globally.
    </p>
  </div>
</div>

        </div>
        </div>
    </section>
  )
}

export default ShipHero