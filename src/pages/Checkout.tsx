import { useEffect, useState } from "react";
import { useCart } from "../hook/useCart";
import ItemContent from "../component/ItemContent";
import { CartProductType } from "./ProductDetails";

const Checkout = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const { cartProducts } = useCart();

  useEffect(() =>{
    const getCurrentDateAndTime = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.toLocaleString('default', { month: 'long' })
      let yyyy = today.getFullYear();
      const orderDate = `${mm} ${dd}, ${yyyy}`
      setCurrentDate(orderDate);
      
    }
    const ProductDeliveryDate = () => {
      let shippingDate = new Date();
      let dd = shippingDate.getDate() + 3;
      let mm = shippingDate.toLocaleString('default', { month: 'long' })
      let yyyy = shippingDate.getFullYear();
      let deliveryDate = `${mm} ${dd}, ${yyyy}`
      setDeliveryDate(deliveryDate);
    }
    getCurrentDateAndTime()
    ProductDeliveryDate()

  },[])


  //Ordering random Number
  const randomNUmb = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
  

  return (
    <div className='border-t border-gray-200 px-8 md:px-12 lg:px-20 py-10'>
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-base md:text-xl">Order #{randomNUmb(22222, 99999)}</p>
        <p className="font-medium text-xs sm:text-sm md:text-base text-gray-600">Order placed on <span className="text-gray-950"> {currentDate}</span></p>
      </div>
      <div className="">
          { cartProducts && cartProducts.map((item: CartProductType ) => {
            return <ItemContent key={item.id} item={item} />

          })}
      </div>
      <div className="border border-gray-200 px-4 md:px-8">
          <p className="text-xs md:text-sm text-gray-700 mt-6 mb-2">Preparing to ship on {deliveryDate}</p>
          <div className="relative">
            <div className="w-full h-[7px] rounded-[5px] bg-[#ebeaec]" />
            <div className="bg-[#5604ee] absolute top-0 rounded-[5px] w-5/12 h-[7px] mr-[15px]" />
          </div>
          <div className="grid grid-cols-4 mt-2 mb-5">
                <p className="justify-self-start text-gray-700 text-xs md:text-sm">Order placed</p>
                <p className="justify-self-center text-gray-700 text-xs md:text-sm">Processing</p>
                <p className="justify-self-center text-gray-700 text-xs md:text-sm">Shipped</p>
                <p className="justify-self-end text-gray-700 text-xs md:text-sm">Delivery</p>
          </div>
          <div className="flex justify-end mb-3">
            <p className="justify-self-end font-bold">Total <span className="">{ cartProducts && `$${cartProducts.reduce((prices: number, item: CartProductType) => prices + item.price, 0).toFixed(2)}`}</span></p>
          </div>
      </div>
    </div>
  )
}

export default Checkout