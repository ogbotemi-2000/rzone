import Image from 'next/image'
import { FEATURES } from '@/constants'
import React from 'react'
import Navbar from './Navbar'

const Update = () => {
  return (
    <section className="flexCenter flex-col transition-all bg-gradient-to-b from-blue-600 to-blue-400">
      <div className="padding-container max-container w-full pb-24 mt-20 ">
        <h1 className='text-white bold-40 lg:bold-10 xl:max-w-[600px]'>Our Services</h1>

        <p className="uppercase regular-18 -mt-1 mb-3 text-slate-950">
          We Offer A Range of Services
        </p>

    <div className=' mt-auto gap-8 py-5 pb-10 lg:py-5 xl:flex-row items-center md:flex min:flex-col min:h-50 min:w-90 '>

    <a href='DoortoDoor'>
    <div className="box-border h-32 w-80 p-4 border-2 gap-4 shadow-lg hover:text-sky-300 mb-4 text-white hover:border-b-2">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/person-1.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Air Freight Sevices</h2>
        <p className="text-sm text-slate-200 truncate">rcfcccc</p>
      </div>
    </li>
</div>
            </a>

   <a href='SeaFreight Delivery'>
<div className="box-border h-32 w-80 p-4 border-2 shadow-lg hover:text-sky-300 mb-4 text-white">
<li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/person-1.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Air Freight Sevices</h2>
        <p className="text-sm text-slate-200 truncate">rcfcccc</p>
      </div>
    </li>
</div>
    </a> 

<a href='AirFreight'>
<div className="box-border h-32 w-80 p-4 border-2 shadow-lg hover:text-sky-300 mb-4 text-white">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/person-1.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Air Freight Sevices</h2>
        <p className="text-sm text-slate-200 truncate">rcfcccc</p>
      </div>
    </li>

</div>
</a>


    </div>
      </div>
       
    </section>
  )
}

export default Update