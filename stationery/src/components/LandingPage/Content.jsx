import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Content() {
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
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
        </div>
        <div className="categories-card">
          <div className="image-category-container">
            <img src="./Images/writing.png" />
          </div>
          <br />
          <p className="text-center pb-5">Writing Instruments</p>
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

          <br />
          <div className="flex justify-center gap-1">
            $10.99/ <small className="line-through text-red-500">$18.99</small>
          </div>
          <button className="border-solid">Add to cart</button>
        </div>

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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
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
          <a href="">Learn more </a>
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
        <div className="">
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
          </div>
          <br />
          <div className="flex justify-around">
            $10.99 <small className="line-through ">$18.99</small>
          </div>
        </div>
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
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
            <div class="bg-blue-600 h-2.5 rounded-full sold-bar "></div>
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
