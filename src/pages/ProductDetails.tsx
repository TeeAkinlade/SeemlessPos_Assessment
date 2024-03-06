import { Rating } from "@mui/material"
import { priceFormat } from "../utils/priceFormat";
import Button from "../component/Button";
import { useCart } from "../hook/useCart";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6';

export type CartProductType ={
  [x: string]: any;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: string
  reviews: number;
}


const ProductDetails = () => {

  const product = JSON.parse(localStorage.getItem('store') || '""');
  const navigate = useNavigate();

  const { handleAddProductToCart, cartProducts } = useCart()
  const [isproductInCart, setIsproductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    full_description: product.full_description,
    price: product.price,
    image: product.image,
    quantity:product.quantity,
    reviews: product.reviews,
  })

  useEffect(()=>{
    if (cartProducts){
      const existingProduct = cartProducts.findIndex((item: { id: number; }) => item.id === product.id);
      if(existingProduct > -1 ){
        setIsproductInCart(true)
      }

    }
  },[cartProducts, product.id])

  return (
    <section className="border-t border-gray-200">
      <button className="border-0 ml-8 md:ml-12 lg:ml-20 mt-6 text-sm text-gray-700 bg-gray-100 hover:bg-gray-300 p-3 rounded-full" onClick={() => navigate(-1)}><FaArrowLeft size={20}/></button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-3 md:pt-0 px-8 md:px-12 lg:px-24 mb-8 justify-between">
        <div className="aspect-square max-h-[450px]">
          <img src={product.image} alt="product" className="w-full h-full object-contain" />
        </div>
        <div>
          <div className="flex justify-between">
            <h2 className="text-gray-700 text-lg md:text-2xl font-medium">{product.name}</h2>
            <h2 className="text-gray-700 text-lg md:text-2xl font-medium">{priceFormat(product.price)}</h2>
          </div>
          <Rating 
            value={product.additionalDetails.reviews} className="my-4"
            readOnly 
          />
          <div>
            <h3 className="font-medium text-base sm:text-lg text-gray-700">Description</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-6 text-justify">{product.full_description}</p>
          </div>
          <Button label="Add to cart" onClick={() => handleAddProductToCart(cartProduct)} />
        </div>
      </div>
    </section>
  )
}

export default ProductDetails