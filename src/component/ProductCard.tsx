import { priceFormat } from '../utils/priceFormat';
import { useNavigate } from 'react-router-dom';
import { ProductType } from './Products';

interface ProductCardProps {
    data: ProductType
    key: number
}

const ProductCard: React.FC<ProductCardProps> = ({ data })  => {
  const navigate = useNavigate()
  
  const handleNavigate = () =>{
    localStorage.setItem('store', JSON.stringify(data))

    navigate(`/product/${data.id}`)
  }

  return (
    <main 
      onClick={() => handleNavigate()}
      className="col-span-1"
    >
      <div className="aspect-square overflow-hidden w-full cursor-pointer bg-gray-100 rounded-2xl transition hover:scale-105 text-center px-4">
          <img src={data.image} alt="product" className="w-full h-full object-contain" />
      </div>
      <div className="mt-3">
        <p className="mt-4 font-semibold">{data.name}</p>
        <p className="text-xs text-gray-400 my-1 capitalize">{data.description}</p>
        <p className="font-semibold">{priceFormat(data.price)}</p>
      </div>
    </main>
  )
}

export default ProductCard