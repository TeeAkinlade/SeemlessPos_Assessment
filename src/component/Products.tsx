import ProductCard from "./ProductCard"
import { products } from "../utils";

export interface ProductType {
   id: number;
   name: string;
   description: string;
   full_description: string;
   price: number;
   image: string;
   reviews?: number | undefined
 }

const Products =  () => {

  
  //USING JSON_SERVER
  // const BASE_URL = 'http://localhost:3030/products';

  // const [product, setProduct] = useState<CartProductType | null >(null)
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     setLoading(true)
  //     try{
  //       const response = axios.get(BASE_URL)
  //       const result = response;
  //       setLoading(false)
  //       setProduct((await result).data)
  //     } catch (error){
  //       console.error(error)
  //     }

  //   }
  //    fetchProduct()
  // }, [])

  // if(loading){
  //   return <p>Loading...</p>
  // }

  return (
      <div className="mt-24 mb-16 flex flex-col justify-center items-center px-8 md:px-12 lg:px:20 py-8">
        <div className="text-center md:max-w-[480px]">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">NEW COLLECTIONS</h2>
          <p className="text-gray-400 text-xs py-6 2xl:py-8">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8">
            {products.map((product: ProductType) => (
                <ProductCard key={product.id} data={product} /> 
              ))}
        </div>
      </div>
  )
}

export default Products