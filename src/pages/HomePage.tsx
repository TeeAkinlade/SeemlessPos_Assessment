import Category from "../component/Category"
import Footer from "../component/Footer"
import Hero from "../component/Hero"
import Products from "../component/Products"

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Products />
        <Category />
        <Footer />
    </div>
  )
}

export default HomePage