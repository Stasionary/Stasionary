import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Login-sigup-pages/Register";
import Login from "./components/Login-sigup-pages/Login";
import ProductsPage from "./components/ProductsPage/ProductsPage";
// import Checkout from "./components/Checkout/Checkout";
import { ProductDetails } from "./components/product details/productDetails";

import Cart from '../src/components/cart/Cart'
import { ContactUs } from "./components/Contact us/ContactUs";
import { AboutUs } from "./components/About Us/AboutUs";
import Cart from "../src/components/cart/Cart";
import { createContext, useState } from "react";
export const ItemContext = createContext([]);



import { isLoginContext } from "./loginContext";

 
function App() {

const [isLogin , setIsLogin] = useState(false)
  const [item, setItem] = useState([]);
  return (
    <isLoginContext.Provider value={{isLogin , setIsLogin  }}>

    <Router>
      <Layout>

        <ItemContext.Provider value={{ item, setItem }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productsPage" element={<ProductsPage />} />
            <Route path="cartPage" element={<Cart />} />
              <Route path="aboutAsPage" element={<AboutUs/>}/>
          <Route path="contactUsPage" element={<ContactUs/>}/>
            <Route path="/ProductDetailsPage" element={<ProductDetails />} />
            {/* <Route path="cartPage" element={<Cart />} /> */}
          </Routes>
        </ItemContext.Provider>

      </Layout>
    </Router>
    </isLoginContext.Provider>
  );
}

export default App;
