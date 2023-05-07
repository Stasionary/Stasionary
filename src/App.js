import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Login-sigup-pages/Register";
import Login from "./components/Login-sigup-pages/Login";
import ProductsPage from "./components/ProductsPage/ProductsPage";
// import Checkout from "./components/Checkout/Checkout";
import { ProductDetails } from "./components/product details/productDetails";
import Cart from "../src/components/cart/Cart";
import { createContext, useState } from "react";
export const ItemContext = createContext([]);

function App() {
  const [item, setItem] = useState([]);

  return (
    <Router>
      <Layout>
        <ItemContext.Provider value={{ item, setItem }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productsPage" element={<ProductsPage />} />
            <Route path="cartPage" element={<Cart />} />
            <Route path="/ProductDetailsPage" element={<ProductDetails />} />
            {/* <Route path="cartPage" element={<Cart />} /> */}
          </Routes>
        </ItemContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
