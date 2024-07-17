import Image from 'next/image'
import React from 'react'

const TermsCondition = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <h1 className='text-slate-950 bold-40 lg:bold-10 xl:max-w-[600px] mt-4'>Terms And Conditions.</h1>

        <Image src="/substract.png" alt="camp" width={50} height={50} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
       
          <p className="regular-16 text-gray-3000 xl:max-w-[800px]">On this page, you will find a standard version of the R-Zone Cargo Website Terms and Conditions.<br/> Please note that different terms and conditions may apply in certain countries.
<br/>The Terms and Conditions of use of the R-Zone Cargo Website are as follows:
</p>
        </div>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
       
          <p className="regular-16 text-gray-3000 xl:max-w-[800px]">
</p>
        </div>

    <div className='mt-auto gap-8 py-5 pb-10 lg:py-5 xl:flex-row items-center md:flex min:flex-col min:h-50 min:w-70'>

    <div className="box-border h-30 w-60 p-4 border-2 gap-4">
    <h2>Over 1000 Shipment Monthly</h2>
</div>

<div className="box-border h-30 w-60 p-4 border-2 ...">
    <h2>Over 1000 Shipment Monthly</h2>
</div>

<div className="box-border h-30 w-60 p-4 border-2 ...">
    <h2>Over 1000 Shipment Monthly</h2>
</div>

    </div>
      </div>
       
    </section>
  )
}

export default TermsCondition