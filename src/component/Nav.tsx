import { CiShoppingCart } from "react-icons/ci"
import { Link } from "react-router-dom"
import { useCart } from "../hook/useCart"

const Nav = () => {
  const { cartQuantity } = useCart();
  const categories = [
    {id: 1, title: "Men"},
    {id: 2, title: "Women"},
    {id: 3, title: "Kids"},
    {id: 4, title: "News & features"},
  ]

  return (
    <nav>
        <div className="bg-black py-3">
          <p className="text-white text-xs text-center capitalize">Get 25% off this summer Sale. Grab it Now!!!</p>
        </div>
        <div className="flex justify-between py-3 px-8 md:px-12 lg:px-20 items-center">
          <Link to='/' className="font-praise text-3xl md:text-5xl">E-store</Link>
          <div className="hidden md:flex space-x-6 items-center">
            {categories.map(({ id, title}) => (
              <Link to='#' key={id} className="text-sm font-semibold">{title}</Link>
            ))}
          </div>
            <div className="relative flex items-center space-x-6">
              <Link to='/cart' className="relative">
                <CiShoppingCart size={24}/>
                <span className="absolute -top-[5px] -right-[6px] bg-black text-white h-4 w-4 text-sm rounded-full flex justify-center items-center">{cartQuantity}</span>
              </Link>
              <Link to='#' className="text-sm font-medium">Login</Link>

            </div>
        </div>
    </nav>
  )
}

export default Nav