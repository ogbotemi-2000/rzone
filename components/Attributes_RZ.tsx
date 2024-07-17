import Image from 'next/image'
import React, { Fragment } from 'react'
import Link from 'next/link'

const Attributes_RZ = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 mt-40 md:mt-60">
        <h1 className='text-slate-950 bold-40 lg:bold-10 xl:max-w-[600px]'>Our Vision</h1>
        <div className='mt-0'>
        <Image src="/substract.png" alt="camp" width={50} height={50} />
        </div>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <p className="text-justify regular-16 text-gray-3000 xl:max-w-[800px] ">At R-Zone Cargo, we are an international team of logistics and supply chain specialists, business and HR professionals, and IT and tech experts working across Uk, Nigeria and Africa countries and territories. 
          We are connected,committed,trusted and tested – to setting an example for sustainable business, building strong partnerships, and offering people a fantastic place to develop their careers.</p>
        </div>

        <div className="mt-auto gap-8 py-10 pb-32 lg:py-20 xl:flex-row md:items-center md:flex">
            <div className="flex-1 w-auto md items-center mx-auto">
                <div className="grid grid-cols-1 mt-0 ">
                    <div>
                        <Image src ="/nature.jpg"
                            alt="Delivery"
                            width={700}
                            height={650}/>
                    </div>

                    <div className="box-border h-50 w-auto p-4 border-2 gap-4">
                    <Link href="/" className="mb-10">
    <h2 className='text-blue-500 bold-20'>Sustainability</h2>
    <p>We prioritize sustainability by utilizing eco-friendly packaging, optimizing routes to reduce carbon emissions, and adopting energy-efficient technologies. Our commitment to green logistics ensures we support a healthier planet while delivering top-notch service. Join us in making a positive impact on the environment. </p>
          </Link>
</div>
                    </div>

            </div>
            <div className="flex-1 w-auto  mx-auto">
            <div className='grid grid-cols-1 mt-0 '>
            <Image src ="/digitilization.jpg"
                            alt="Delivery"
                            width={700}
                            height={600}/>
            </div>
            <div className="box-border h-50 w-auto p-4 border-2 gap-4">
                    <Link href="/" className="mb-10">
    <h2 className='text-blue-500 bold-20'>Digitalization</h2>
    <p> Our digitalization approach revolutionizes logistics with cutting-edge technology, enhancing real-time tracking, seamless online booking, and efficient customer support. Embracing innovation, we streamline operations, ensure transparency, and elevate user experience, making global shipping smarter and faster.</p>
          </Link>
</div>
</div>
            <div className="flex-1 w-auto mx-auto ">
                <div className='grid grid-cols-1 mt-0'>
            <Image src ="/worldwide.jpg"
                            alt="Delivery"
                            width={700}
                            height={600}/>
            </div>
            <div className="box-border h-50 w-auto p-4 border-2 gap-4">
                    <Link href="/" className="mb-10">
    <h2 className='text-blue-500 bold-20'>Globalization</h2>
    <p>We embrace globalization by offering seamless, efficient logistics solutions that connect businesses worldwide. With strategic partnerships and innovative technology, we ensure timely, cost-effective deliveries, empowering global trade and supporting small businesses to thrive in the international market. Your cargo, our priority—everywhere.</p>
          </Link>
</div>
</div>
        </div>

      </div>
       
    </section>
  )
}

export default Attributes_RZ