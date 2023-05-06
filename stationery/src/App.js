import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/checkout";
import { ProductDetails } from "./components/product details/productDetails";

function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          // other routes here
          <Route path="cartPage" element={<Cart />} />
          <Route path="checkoutPage" element={<Checkout/>}/>
          <Route path="productDetailsPage" element={<ProductDetails/>}/>
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
