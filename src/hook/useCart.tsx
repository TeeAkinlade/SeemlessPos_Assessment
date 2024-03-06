import { createContext, useContext, useEffect, useState } from "react";
import { CartProductType } from "../pages/ProductDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartQuantity: number,
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (product: CartProductType) => void,
    handleRomoveProduct: (product: CartProductType) => void,
    handleClearCart: () => void;
}

export const CartContext = createContext<CartContextType | null >(null);

interface Props {
    [propsName: string] : any
}

export const CartContextProvider = (props : Props) =>{
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartProducts, setCartProducts] = useState< CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('estoreStorage')
        const result: CartProductType[] | null = JSON.parse(cartItems)
        if(result){
            setCartQuantity(result.length)
        }
        setCartProducts(result)
    }, [])

    //Add product to the cart
    const handleAddProductToCart = (product: CartProductType) =>{
        let updatedCart: CartProductType[];
        if(cartProducts){
            const existingProduct = cartProducts.map((item) => item.id)
            if(!existingProduct.includes(product.id)){
                updatedCart = [...cartProducts, product]
                toast.success('Product added to cart')
                setCartProducts(updatedCart)
                localStorage.setItem('estoreStorage', JSON.stringify(updatedCart))
                setCartQuantity(updatedCart.length)
                return updatedCart
            }
        } else {
            updatedCart = [product];
            toast.success('Product added to cart')
            setCartProducts(updatedCart)
            localStorage.setItem('estoreStorage', JSON.stringify(updatedCart))
            setCartQuantity(updatedCart.length)
            return updatedCart
        }
    };

    //Remove product from cart
    const handleRomoveProduct = (product:CartProductType) => {
        if(cartProducts){
            const filterProducts = cartProducts.filter(items => items.id !== product.id);
            setCartProducts(filterProducts)
            setCartQuantity(filterProducts.length)
            toast.success('Product removed')
            localStorage.setItem('estoreStorage', JSON.stringify(filterProducts))
        }

    };

    //clear cart
    const handleClearCart = () => {
        setCartProducts(null)
        setCartQuantity(0)
        toast.success("Cart cleared")
        localStorage.removeItem('estoreStorage')
    }

    const value = {cartQuantity, cartProducts, handleAddProductToCart, handleRomoveProduct, handleClearCart};

    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () =>{
    const context = useContext(CartContext)

    if(context === null) {
        throw new Error('useCart must be used with a cartContextProvider')
    }
    return context;
}