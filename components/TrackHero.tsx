import Image from 'next/image'

const TrackHero = () => {
  return (
    <section>
      <div className='hero'>
        <div className='hero--content'>Tracking your Deliveries</div>
        <Image src="/ship_73.jpg" alt='background image' width={2000} height={500} className='bg-img'/>
        <p>Rzone Cargo</p>

      
          <div className="lg:gap-4 mt-10 px-6 lg:-mt-20 lg:mr-6 text-center justify-center md:flex min:flex-colm'>
">
  <div className="flex-initial mb-3 bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[300px] rounded-lg xl:px-4 xl:py-5 relative w-full overflow-hidden shadow-slate-400 shadow-lg justify-center min:mb-4">
  <h2 className="regular-16 md:regular-32 2xl:regular-64 capitalize text-white justify-center">
            <strong>Ship Now</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Find the right service.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={100}
            height={150}
            className="camp-quote"
          />
  </div>
  <div className="flex-initial mb-3 bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[300px] rounded-lg xl:px-4 xl:py-5 relative w-full overflow-hidden shadow-slate-400 shadow-lg justify-center">
  <h2 className="regular-16 md:regular-32 2xl:regular-64 capitalize text-white justify-center">
            <strong>Ship Now</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Find the right service.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={100}
            height={150}
            className="camp-quote"
          />
  </div>
  <div className="flex-initial bg-blue-500 p-8 lg:max-w-[500px] xl:max-w-[300px] rounded-lg xl:px-4 xl:py-5 relative w-full overflow-hidden shadow-slate-400 shadow-lg justify-center">
  <h2 className="regular-16 md:regular-32 2xl:regular-64 capitalize text-white justify-center">
            <strong>Ship Now</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Find the right service.
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={100}
            height={150}
            className="camp-quote"
          />
  </div>
</div>
      </div>

      
      </section>
  )
}

export default TrackHero 