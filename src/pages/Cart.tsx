import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../hook/useCart"
import { MdArrowBack } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import Button from "../component/Button";
import ItemContent from "../component/ItemContent";
import toast from "react-hot-toast";
import { CartProductType } from "./ProductDetails";

const Cart = () => {
  const { cartProducts, handleClearCart} = useCart();
  const navigate = useNavigate()

  const handleChechout = () =>{
    toast.success('You have successfully placed an order')
    navigate('/checkout')
  }

  if(!cartProducts || cartProducts.length === 0) {
    return <div className="pt-8 border-t border-gray-200">
       <h2 className="text-2xl text-center mb-3">Your cart is empty</h2>
        <Link to='/' className="text-base flex justify-center items-center text-gray-600 hover:text-gray-700"><MdArrowBack size={16} className='mr-3' />start shopping</Link>
    </div>
  }
  return (
    <section className="py-8 border-t border-gray-200 px-8 flex justify-center items-center">
      <div className="w-full md:max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-gray-800">Shopping Cart</h2>
        <div className="grid grid-cols-3 text-sm gap-4 px-4 sm:px-8 md:px-12 pb-2 items-center mt-8">
          <div className="justify-self-start col-span-2 font-medium">Product</div>
          <div className="justify-self-end font-medium">price</div>
        </div>
        <div className="">
          { cartProducts && cartProducts.map((item: CartProductType ) => {
            return <ItemContent key={item.id} item={item} />

          })}
        </div>
        <div className="flex flex-col md:flex-row justify-between border-t-[1.5px] border-slate-200 py-4 gap-4">
          <div className="w-[130px] text-sm">
            <button 
              onClick={() => handleClearCart()}
              className=" border border-gray-400 my-1 px-4 py-1.5 text-gray-700 outline-none rounded-md flex items-center hover:bg-gray-300 transition ease-in-out duration-150 text-sm"><MdOutlineDeleteForever size={16} color="red" className="mr-2" />Clear cart</button>
          </div>
          <div className="text-sm flex flex-col items-start pr-8">
            <div className="text-base font-bold text-gray-800 flex justify-between items-center w-full">
              <p>Total</p>
              <p>
                { cartProducts && `$${cartProducts.reduce((prices: number, item: CartProductType) => prices + item.price, 0).toFixed(2)}`}
              </p>
            </div>
            <p className="text-gray-500 text-sm"> No taxes and shipping cost</p>
            <Button label="Checkout" onClick={handleChechout} />
            <Link to='/' className="text-sm flex justify-center items-center pt-4 text-gray-500 hover:text-gray-700"><MdArrowBack size={16} className='mr-3 ' />Continue shopping</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart