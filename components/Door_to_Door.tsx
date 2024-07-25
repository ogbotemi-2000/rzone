import Image from 'next/image'
import { FEATURES } from '@/constants'
import React from 'react'
import Navbar from './Navbar'
import {FadeIn} from './animations/scroll';

const Door_to_Door = () => {
  return (
    <section className="flexCenter flex-col transition-all">
      <div className="padding-container max-container w-full pt-4 mt-20">
        
        <h1 className='text-slate-950 bold-40 lg:bold-10 xl:max-w-[600px]'>
          About Us
        </h1>

        <p className="uppercase regular-18 -mt-1 mb-3 text-slate-950">
          We are BEYOND BORDERS
        </p>
        <Image src="/substract.png" alt="camp" width={50} height={50} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
       
          <p className="regular-16 text-gray-3000 xl:max-w-[800px] text-justify">R-zone provides cargo services from UK to Nigeria, sea freight and international courier shipping services at an affordable rate.
We provide efficient door-to-door cargo services, ocean shipping services, customs clearing, and door-to-door delivery for any type of commercial or domestic cargo and shipping to Nigeria from the United Kingdom.
We are a team of professionals offering top quality services anywhere in the UK.
R-Zone Enterprises was founded in 2012. We specialise in the shipment of all types of vehicles and cargo to Nigeria no matter how big or small. RZE will ship and can arrange custom clearance for your vehicles and cargo in specific continents. We also offer door-to-door shipping for both domestic and commercial customers throughout the UK and across Africa!</p>
        </div>

    <div className='mt-auto gap-8 py-5 pb-10 lg:py-5 xl:flex-row items-center md:flex min:flex-col min:h-50 min:w-90 '>

    <div className="box-border h-30 w-60 p-4 border-2 gap-4 shadow-lg hover:bg-sky-200 border-l-blue-300">
    <h2> More than 1000 Shipment Monthly.</h2>
</div>

<div className="box-border h-30 w-60 p-4 border-2 shadow-lg hover:bg-sky-200 border-l-blue-300">
    <h2>UK to Nigeria.</h2>
</div>

<div className="box-border h-30 w-60 p-4 border-2 shadow-lg hover:bg-sky-200 border-l-blue-300">
    <h2>Swift and Safe Delivery</h2>
</div>

    </div>
    <div className='item-center justify-center'>
      <FadeIn>
        <Image src ="/cargo.jpg"
            alt="Delivery"
            width={700}
            height={500}/>
        
      </FadeIn>
    </div>
      </div>
       
    </section>
  )
}

export default Door_to_Door