import Nav from "./component/Nav";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom'
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./provider/CartProvider";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";

function App() {

  return (
    <>
      <Toaster toastOptions={{
        style:{
          background: '#fff',
          color: 'green'
        }
      }} />
      <CartProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='product/:productId' element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
