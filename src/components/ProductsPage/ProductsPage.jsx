import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import Products from '../Products.json'
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Products from "../JsonFiels/Products.json";
import { Link } from "react-router-dom";
import { ItemContext } from "../../App";
import { counterContext } from "../../App";
const theme = createTheme({
  palette: {
    primary: {
      main: "#867070", // replace with your desired color
    },
  },
});

const ProductsPage = () => {
  const navigate = useNavigate();
  const { item, setItem } = useContext(ItemContext);
  const { counter, setCounter } = useContext(counterContext);
  const [abc, setAbc] = useState(Products);
  function AddToCart(event) {
    event.preventDefault();
    const selectedProduct = Products.find(
      (product) => product.id === event.target.id
    );
    setCounter(counter + 1);
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
    let [array] = selectedProduct1;
    // Retrieve previous items from local storage

    // Add the new item to the array of stored items

    sessionStorage.setItem("newItem", JSON.stringify(array));
    navigate("/ProductDetailsPage");
  }
  let filteredCategory;
  let filteredCategoryAfterClicking = Products;
  function filterCategory(event) {
    filteredCategory = Products.filter(
      (product) => product.category === event.target.id
    );
    filteredCategory.length > 2 ? setAbc(filteredCategory) : setAbc(Products);
    filteredCategoryAfterClicking = filteredCategory;
  }
  const Cards = abc.map((product, index) => {
    return (
      <div
        key={index}
        className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md"
      >
        <a href="#">
          <img
            id={product.id}
            onClick={AddToProductDetails}
            className="hover:grow hover:shadow-lg"
            src={product.img}
          />
          <div className="flex items-center mt-5 justify-between">
            <p className="">{product.title}</p>
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
            <button
              className="btn btn-outline-blue"
              id={product.id}
              onClick={AddToProductDetails}
            >
              {" "}
              Details
            </button>
          </div>
        </a>
      </div>
    );
  });
  const CardsFiltered = abc.map((product, index) => {
    return (
      <div
        key={index}
        className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md"
      >
        <a href="#">
          <img
            id={product.id}
            onClick={AddToProductDetails}
            className="hover:grow hover:shadow-lg"
            src={product.img}
          />
          <div className="flex items-center mt-5 justify-between">
            <p className="">{product.title}</p>
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
            <button
              className="btn btn-outline-blue"
              id={product.id}
              onClick={AddToProductDetails}
            >
              {" "}
              Details
            </button>
          </div>
        </a>
      </div>
    );
  });
  console.log(CardsFiltered);
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
                  onClick={filterCategory}
                  id={Products.quantity}
                >
                  View All{" "}
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Writing Instruments{" "}
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="Paper Products"
                >
                  Paper Products
                </a>
                <a
                  href="#"
                  className="block font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={filterCategory}
                  id="Desk Accessories"
                >
                  Desk Accessories
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="Art Supplies"
                >
                  Art Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="School Supplies"
                >
                  School Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="Presentation"
                >
                  Presentation Supplies
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="Calendars and Planners"
                >
                  Calendars and Planners
                </a>
                <a
                  href="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={filterCategory}
                  id="Filing and Organization"
                >
                  Filing and Organization
                </a>
              </div>
              <section className="bg-white py-8 ">
                <div className="container mx-auto flex items-center flex-wrap pb-12">
                  {abc === false ? Cards : CardsFiltered}

                  </div>
                <form className="flex items-center justify-center mt-10">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20vw pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required=""
                    // onChange={(e) => setsearch(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </form>
                <div className="container mx-auto flex items-center justify-center flex-wrap pb-12">
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
