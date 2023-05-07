import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Products from '../Products.json'

import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Products from "../JsonFiels/Products.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#867070", // replace with your desired color
    },
  },
});

const ProductsPage = () => {
  const navigate=useNavigate()

  const [item, setItem] = useState([]);

  function AddToCart(event) {
    event.preventDefault();
    const selectedProduct = Products.find(
      (product) => product.id === event.target.id
    );
    // Retrieve previous items from local storage
    const storedItems = JSON.parse(localStorage.getItem("newItem")) || [];
    // Add the new item to the array of stored items
    const updatedItems = [...storedItems, selectedProduct];

    setItem(() => [...updatedItems]);

    localStorage.setItem("newItem", JSON.stringify(updatedItems));
  }

  function AddToProductDetails(event) {
    event.preventDefault();
    const selectedProduct1 = Products.filter(
      (product) => product.id === event.target.id
    );
    let [array]=selectedProduct1
    // Retrieve previous items from local storage
    
    // Add the new item to the array of stored items


    sessionStorage.setItem("newItem", JSON.stringify(array));
    navigate("/ProductDetailsPage")
  }


  const Cards = Products.map((product, index) => {
    return (
      <div
        key={index}
        className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md"
      >
        <a href="#">
          <Link to="/ProductDetailsPage" ><img onClick={AddToProductDetails} className="hover:grow hover:shadow-lg" src={product.img} /></Link>
          <div className="flex items-center mt-5 justify-between">
            <p className="" >{product.title}</p>
            <p className="ml-20  text-gray-900">{product.price} JD</p>
          </div>

          <div className="flex justify-around mt-3">
            <button
              className="btn btn-outline "
              id={product.id}
              onClick={AddToCart}
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="file: ml-2 h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
             <button className="btn btn-outline-blue" id={product.id} onClick={AddToProductDetails}> Details</button>
          </div>
        </a>
      </div>
    );
  });
  return (
    <div>
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
              <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                <h1>Categories</h1>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Writing Instruments{" "}
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Paper Products
                </a>
                <a
                  href="#"
                  className="block font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Desk Accessories
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Art Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  School Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Presentation Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Calendars and Planners
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Filing and Organization
                </a>
              </div>
              <section className="bg-white py-8 ">
                <div className="container mx-auto flex items-center flex-wrap pb-12">
                  {Cards}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* <Pagination count={2} color="primary" /> */}
        {/* <Pagination count={10} color="primary" className='flex justify-center mb-5' /> */}
        {/* <Pagination count={10} variant="outlined" color="secondary" className='flex justify-center mb-5' /> */}
        <ThemeProvider theme={theme}>
          <Pagination
            count={2}
            color="primary"
            className="flex justify-center mb-5"
          />
        </ThemeProvider>
      </>
    </div>
  );
};

export default ProductsPage;
