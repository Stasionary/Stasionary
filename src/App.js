import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Login-sigup-pages/Register";
import Login from "./components/Login-sigup-pages/Login";
import ProductsPage from "./components/ProductsPage/ProductsPage";
// import Checkout from "./components/Checkout/Checkout";
import { ProductDetails } from "./components/product details/productDetails";
import Cart from '../src/components/cart/Cart'
import { useState } from "react";

import { isLoginContext } from "./loginContext";

 
function App() {
const [isLogin , setIsLogin] = useState(false)



// console.log(isLogin); 
  return (
    <isLoginContext.Provider value={{isLogin , setIsLogin  }}>

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="cartPage" element={<Cart/>}/>
          <Route path="/ProductDetailsPage" element={<ProductDetails />} />
          {/* <Route path="cartPage" element={<Cart />} /> */}

        </Routes>
      </Layout>
    </Router>
    </isLoginContext.Provider>
  );
}

export default App;
