import { Link } from "react-router-dom"
import FooterLink from "./FooterLink"

const Footer = () => {
  return (
    <footer className=''>
        <div className="py-12 px-8 md:px-12 lg:px-20 mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0 ">
            <div className="">
              <p className="font-praise text-6xl">E-store</p>
              <p className="text-gray-400 text-xs max-w-[290px] xl:w-[400px] mb-6">Get newsletter update for upcoming product and best discount for all items</p>
              <div className="flex items-center gap-4">
              <input 
                type="text"
                placeholder='Your Email'
                className='rounded-full border border-gray-400 px-6 py-2 w-full outline-none focus:outline text-xs' 
              />
              <button
                type='submit'
                className='px-6 py-2 rounded-full text-white bg-black text-xs'
              >Submit
              </button>
              </div>
            </div>
            <FooterLink/>
        </div>
        <div className="py-3 bg-black flex justify-between items-center md:items-start px-8 md:px-12 lg:px-20 text-white">
          <p className="text-xs"><span>&copy;</span> 2024 Tee production</p>
          <ul className="flex items-center md:space-x-5">
            <li><Link to='#' className="text-xs hover:text-gray-400">Terms & Conditions</Link></li>
            <li><Link to='#' className="text-xs hover:text-gray-400 hidden md:block">Privacy Policy</Link></li>
            <li><Link to='#' className="text-xs hover:text-gray-400 hidden md:block">Cookies Policy</Link></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer