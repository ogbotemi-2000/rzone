import Image from 'next/image'
import Button from './Button'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-17 mt-20 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="ca  mp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-87">More Than Just A <span className="bold-52 text-blue-500 lg:bold-86">Logistics</span> Shipment.</h1>
        <p className="regular-18 mt-6 text-gray-30 xl:max-w-[520px]">
        Essex-based global shipping leader. Seamlessly connecting businesses worldwide with reliable logistics solutions.
        </p>

        <div className="my-11 f lex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            23k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get Quote Now" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Our Values?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">United Kingdom</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 