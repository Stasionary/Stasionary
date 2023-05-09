import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ItemContext } from "../../App";
import { counterContext } from "../../App";
import './Context.css'
import Products from "../JsonFiels/Products.json";

export default function Content() {
  const { counter, setCounter } = useContext(counterContext)

  const { item, setItem } = useContext(ItemContext);
  const [timeLeft, setTimeLeft] = useState(18000);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const displayTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);
  const saleCards = Products.filter((card) => card.Sale);
  const salePriceCards = saleCards.map((product) => {
    const priceAfter = (product.Sale / 100) * product.price;
    const salePrice = product.price - priceAfter;
    const roundedPrice = salePrice.toFixed(1);
    return { ...product, roundedPrice };
  });

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
    setCounter(counter + 1)

  }

  return (
    <>
      <br />
      <br />
      <br />

      <h1 className="text-center text-3xl">Categories</h1>

      <br />
      <p className="text-center">
        Order stationery easily and hassle-free on our eCommerce website. Shop
        now for high-quality products, competitive prices, and fast shipping.
      </p>
      <div className="landing-categories">
        {/* <Link to={`/productsPage/${category.id}`}>
          {" "}
          {category.name} */}


        {/* </Link> */}

        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/PaperProduct.png" />
          </div>
          <br />
          <p className="text-center pb-5">Paper Products</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/Desk Accessories.png" />
          </div>
          <br />
          <p className="text-center pb-5">Desk Accessories</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/Art Supplies.png" />
          </div>
          <br />
          <p className="text-center pb-5">Art Supplies</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/School Supplies.png" />
          </div>
          <br />
          <p className="text-center pb-5">School Supplies</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/Presentation Supplies.png" />
          </div>
          <br />
          <p className="text-center pb-5">Presentation Supplies</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/Calendars and Planners.png" />
          </div>
          <br />
          <p className="text-center pb-5">Calendars and Planners</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/Filing and Organization.png" />
          </div>
          <br />
          <p className="text-center pb-5">Filing and Organization</p>
        </div>
      </div>
      <div className="sales-container">
        <div className="flex justify-around ">
          <h3 className="text-2xl	">
            <b>FLASH SALE</b>
          </h3>
          <h3 className="text-2xl	">
            <b>ENDS IN {displayTime}</b>
          </h3>
        </div>
        <div className="flash-sale">
          {salePriceCards.map((product, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md"
            >
              <a href="#">
                <img
                  id={product.id}
                  onClick={AddToCart}
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
                    onClick={AddToCart}
                  >
                    {" "}
                    Details
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-products">
        <div>
          <h1 className="text-4xl">
            <b>Featured Products</b>
          </h1>
          <br />
          <p className="w-1/2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <br />
        </div>
        <div className="featured-products-cards">
          <div
            className="featured-prodoct-card p-5
          "
          >
            <img src="./Images/circle.png" />
            <div className="flex-col">
              <strong>Easy to use</strong>
              <p className="text-xs	">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div
            className="featured-prodoct-card p-5
          "
          >
            <img src="./Images/circle.png" />
            <div className="flex-col">
              <strong>Easy to use</strong>
              <p className="text-xs	">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div
            className="featured-prodoct-card p-5
          "
          >
            <img src="./Images/circle.png" />
            <div className="flex-col">
              <strong>Easy to use</strong>
              <p className="text-xs	">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
          <div
            className="featured-prodoct-card p-5
          "
          >
            <img src="./Images/circle.png" />
            <div className="flex-col">
              <strong>Easy to use</strong>
              <p className="text-xs	">
                Things on a very small that you have any direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
