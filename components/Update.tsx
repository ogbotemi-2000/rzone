import Image from 'next/image'
import { FEATURES } from '@/constants'
import React from 'react'
import Navbar from './Navbar'

import {TextIn} from './animations/textIn'

const Update = () => {
  return (
    <section className="flexCenter flex-col transition-all bg-gradient-to-b from-blue-600 to-blue-400">
      <div className="padding-container max-container w-full pb-24 mt-20 ">
        <h1 className='text-white bold-40 lg:bold-10 xl:max-w-[600px]'>Our Services</h1>

        <p className="uppercase regular-18 -mt-1 mb-3 text-white">
          We Offer A Range of Services
        </p>

    <div className=' mt-auto gap-8 py-5 pb-10 lg:py-5 xl:flex-row items-center md:flex min:flex-col min:h-50 min:w-90 '>

    <a href=''>
    <div className="box-border p-4 border-2 gap-4 shadow-lg hover:text-sky-300 mb-4 text-white hover:border-b-2">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/door.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Door to Door Sevices</h2>
        <div className="text-sm text-slate-200 text-justify">
          <TextIn>
          We offer reliable door-to-door services, ensuring your shipments are picked up and delivered directly to your desired location. With our dedicated team and advanced tracking systems, we provide seamless, 
          hassle-free logistics solutions, making shipping easy and efficient for businesses of all sizes.
          </TextIn>
        </div>
      </div>
    </li>
</div>
            </a>

   <a href=''>
<div className="box-border p-4 border-2 shadow-lg hover:text-sky-300 mb-4 text-white">
<li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/air.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Air Freight Sevices</h2>
        <div className="text-sm text-slate-200 text-justify">
        <TextIn>
        Our air freight services ensure swift, reliable delivery for your time-sensitive shipments. Leveraging global networks and advanced tracking, we provide efficient, cost-effective solutions for businesses of all sizes.
        Trust us for secure, on-time air transport, making your logistics seamless and stress-free.
        </TextIn>  
         </div>
      </div>
    </li>
</div>
    </a> 

<a href=''>
<div className="box-border p-4 border-2 shadow-lg hover:text-sky-300 mb-4 text-white">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/freight.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Sea Freight Sevices</h2>
        <div className="text-sm text-slate-200 text-justify">
        <TextIn>
        Our Sea Freight Services offer reliable, cost-effective shipping solutions for your global needs. With extensive industry expertise, we ensure secure, timely deliveries and handle all logistics, from documentation to customs clearance. Trust us
        to navigate your cargo smoothly across oceans, making international shipping stress-free and efficient.
        </TextIn>
        </div>
      </div>
    </li>

</div>
</a>


    </div>
    <div>
    <div className=' mt-auto gap-8 py-5 pb-10 lg:py-5 xl:flex-row items-center md:flex min:flex-col min:h-50 min:w-90 '>

<a href='/'>
<div className="box-border p-4 border-2 gap-4 shadow-lg hover:text-sky-300 mb-4 text-white hover:border-b-2">
<li className="flex py-4 first:pt-0 last:pb-0">
  <img className="h-10 w-10 rounded-full" src="/person-1.png" alt="" />
  <div className="ml-3 overflow-hidden">
    <h2 className="font-medium text-white hover:text-blue-300">Supply Chain Optimization</h2>
    <div className="text-sm text-slate-200 text-justify">
    <TextIn>
    R-Zone Cargo optimizes supply chains with advanced 
    technology, ensuring efficiency, cost-effectiveness, and timely deliveries globally.
    </TextIn>
    </div>
  </div>
</li>
</div>
        </a>


    <a href='/'>
    <div className="box-border p-4 border-2 gap-4 shadow-lg hover:text-sky-300 mb-4 text-white hover:border-b-2">
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src="/person-1.png" alt="" />
      <div className="ml-3 overflow-hidden">
        <h2 className="font-medium text-white hover:text-blue-300">Advanced Warehousing Sevices</h2>
        <div className="text-sm text-slate-200 text-justify">
        <TextIn>
        R-Zone Cargo provides advanced 
        warehousing with cutting-edge technology, ensuring secure, efficient, and organized storage solutions.
        </TextIn>
        </div>
      </div>
    </li>
</div>
            </a>
        </div>
    </div>
      </div>
       
    </section>
  )
}

export default Update