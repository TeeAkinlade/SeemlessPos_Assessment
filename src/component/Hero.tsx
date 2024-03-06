import heroImage from '../assets/images/DRUGSTORE 1 (1).jpg'

const Hero = () => {
  return (
    <section className="mt-4 m-8 md:mx-12 lg:mx-20 relative">
        <div className="md:max-h-[400px] overflow-hidden rounded-2xl">
            <img src={heroImage} alt="banner" className='object-contain w-full' />
        </div>
        <div className="absolute bottom-2 md:bottom-10 text-white w-full px-2 md:px-12">
          <h1 className="text-xl md:text-4xl font-bold">E-STORE SPRING COLLECTION</h1>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs md:text-sm max-w-[520px] hidden md:block">Find out our best spring collection. Offering our best quality product in our Tolus spring collection</p>
            <button className='bg-white text-xs md:text-base text-black px-4 md:px-12 py-1.5 rounded-full mt-2 md:mt-0'>Buy Now</button>
          </div>
        </div>
    </section>
  )
}

export default Hero