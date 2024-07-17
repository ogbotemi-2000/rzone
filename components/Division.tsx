import Image from 'next/image'
import React from 'react'

const Division= () => {
  return (
    <section className="flexCenter relative flex-1 flex-col mt-10">
    <div className='bg-sky-50 h-80 mb-80 lg:mb-20'>
      <div className="lg:flex padding-container max-container w-full ">
        <div className='my-10'>
        <h1 className='text-slate-950 bold-40 lg:bold-10 xl:max-w-[600px]'>Trusted and Tested</h1>
        <div className='mt-0'>
        <Image src="/substract.png" alt="camp" width={50} height={50} />
        </div>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 mr-8">
          <p className="regular-16 text-gray-3000 xl:max-w-[800px]">At R-Zone Cargo, we are an international team of logistics and supply chain specialists, business and HR professionals, and IT and tech experts working across Uk, Nigeria and Africa countries and territories. 
          We are connected,committed,trusted and tested – to setting an example 
          for sustainable business, building strong partnerships, and offering people a fantastic place 
          to develop their careers.</p>
          
          <h3 className='bg-blue-700 px-3 py-3 rounded-md text-white bold:40 my-1'>Find Out More.</h3>
        </div>
        </div>
        
        <Image src ="/team.jpg"
                            alt="Delivery"
                            width={500}
                            height={200}/>
      
                            </div>
       </div>
    </section>
  )
}

export default Division