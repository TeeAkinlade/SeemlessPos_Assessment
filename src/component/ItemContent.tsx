import { Link } from "react-router-dom"
import { CartProductType } from "../pages/ProductDetails"
import { priceFormat } from "../utils/priceFormat"
import { useCart } from "../hook/useCart"

interface ItemProps {
  item: CartProductType
}

const ItemContent: React.FC<ItemProps> = ({item}) => {
  const { handleRomoveProduct } = useCart()
  return (
    <div className="grid grid-cols-3 text-xs md:text-sm gap-4 border-[1.5px] border-slate-200 py-4 px-4 sm:px-8 md:px-12">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link to={`/product/${item.id}`}>
          <div className="aspect-square max-w-[70px]">
            <img src={item.image} alt="product" className="object-contain" />
          </div>
        </Link>
          <div className="flex flex-col justify-between items-start">
            <Link to={`/product/${item.id}`} className="font-semibold">{item.name}</Link>
            <p className="text-gray-400 text-xs">{item.description}</p>
            <button 
              onClick={() => handleRomoveProduct(item)}
              className="underline text-gray-500 hover:text-red-500 text-sm"
            >Remove</button>
          </div>
      </div>
      <div className="col-span-1 text-end font-semibold">{priceFormat(item.price)}</div>
    </div>
  )
}

export default ItemContent