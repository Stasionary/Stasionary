import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Products from "../Products.json";

export default function Content() {
  // function Category(category) {
  //   setCards(cards.filter((card) => category !== card.category));
  // }
  const saleCards = Products.filter((card) => card.Sale);
  const salePriceCards = saleCards.map((product) => {
    const priceAfter = (product.Sale / 100) * product.price;
    const salePrice = product.price - priceAfter;
    const roundedPrice = salePrice.toFixed(1);

    return { ...product, roundedPrice };
  });
  return (
    <>
      <br />
      <br />
      <br />
      <h1
        className="text-center text-3xl
"
      >
        Categories
      </h1>
      <br />
      <p className="text-center">
        Order stationery easily and hassle-free on our eCommerce website. Shop
        now for high-quality products, competitive prices, and fast shipping.
      </p>
      <div className="landing-categories">
        {/* <Link to={`/productsPage/${category.id}`}>
          {" "}
          {category.name} */}
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        {/* </Link> */}

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

      <div className="flex justify-around ">
        <h3 className="text-2xl	">
          <b>FLASH SALE</b>
        </h3>
        <h3 className="text-2xl	">
          <b>ENDS IN 00:00:00</b>
        </h3>
      </div>
      <div className="flash-sale">
        {salePriceCards.slice(0, 5).map((product, index) => (
          <div
            key={index}
            className="sale-card w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md"
          >
            <div className="discount-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={15}
              >
                <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
              </svg>
              <p>{product.Sale}%</p>
            </div>
            <a href="#">
              <img className="hover:grow hover:shadow-lg" src={product.img} />
              <div className="pt-3 flex items-center justify-between">
                <p className="">{product.title}</p>
                <svg
                  className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              <p className="pt-1 text-gray-900 text-red-600	">
                {product.price} JD{" "}
                <span className="text-xs line-through	">
                  {product.roundedPrice}JD
                </span>
              </p>
              <button className="btn btn-outline">Add to cart</button>
            </a>
          </div>
        ))}
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
      <div className="flex justify-center	m-20 gap-20">
        <div className="sale-card">
          <div className="discount-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={15}
            >
              <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
            </svg>
            <p>-30%</p>
          </div>
          <img src="./Images/notebook.png" height={280} width={200} />
          <br />
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div className="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
      </div>
    </>
  );
}