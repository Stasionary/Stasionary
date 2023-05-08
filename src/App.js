import { isLoginContext } from "./loginContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Login-sigup-pages/Register";
import Login from "./components/Login-sigup-pages/Login";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import { ProductDetails } from "./components/product details/productDetails";
// import { ContactUs } from "./components/Contact us/ContactUs";
import ContactUs from './components/Contact us/ContactUs'
import { AboutUs } from "./components/About Us/AboutUs";
import Cart from "../src/components/cart/Cart";
import { createContext, useState } from "react";

import Search from "./components/Search/Search";
import { PhoneNumberProvider } from "./components/Checkout/PhoneNumberContext";
import Review from "./components/Checkout/Review";
import Checkout from "./components/Checkout/Checkout";


export const ItemContext = createContext([]);
export const counterContext = createContext([]);


function App() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
 
  const [item, setItem] = useState([]);
  return (


    <counterContext.Provider value={{ counter, setCounter }}>
      <isLoginContext.Provider value={{ isLogin, setIsLogin }}>

        <Router>
          <PhoneNumberProvider>
            <Layout>

              <ItemContext.Provider value={{ item, setItem }}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/productsPage" element={<ProductsPage />} />
                  <Route path="cartPage" element={<Cart />} />
                  <Route path="aboutAsPage" element={<AboutUs />} />
                  <Route path="contactUsPage" element={<ContactUs />} />
                  <Route path="/ProductDetailsPage" element={<ProductDetails />} />
                  {/* <Route path="SearchBar" element={<Search/>}/> */}
                  <Route path='SearchPage' element={<Search />} />
                  {/* <Route path="cartPage" element={<Cart />} /> */}
                  <Route path="/CheckoutPage" element={<Checkout />} />
                </Routes>
              </ItemContext.Provider>

            </Layout>
          </PhoneNumberProvider>
        </Router>
      </isLoginContext.Provider>
    </counterContext.Provider>



    // <counterContext.Provider value={{ counter, setCounter }}>
    //   <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
    //     <Router>
    //       <Layout>
    //         <ItemContext.Provider value={{ item, setItem }}>
    //           <Routes>
    //             <Route path="/" element={<LandingPage />} />
    //             <Route path="/register" element={<Register />} />
    //             <Route path="/login" element={<Login />} />
    //             <Route path="/productsPage" element={<ProductsPage />} />
    //             <Route path="cartPage" element={<Cart />} />
    //             <Route path="aboutAsPage" element={<AboutUs />} />
    //             <Route path="contactUsPage" element={<ContactUs />} />
    //             <Route
    //               path="/ProductDetailsPage"
    //               element={<ProductDetails />}
    //             />
    //             {/* <Route path="cartPage" element={<Cart />} /> */}
    //           </Routes>
    //         </ItemContext.Provider>
    //       </Layout>
    //     </Router>
    //   </isLoginContext.Provider>
    // </counterContext.Provider>

  );
}

export default App;