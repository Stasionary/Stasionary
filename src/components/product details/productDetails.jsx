import React from 'react'
import Products from '../Products.json'
import { useState } from 'react'
import { useEffect } from 'react'

export const ProductDetails = () => {

    //     const [productDetails, setproductDetails] = useState(null)
    //     useEffect(() => {

    //         setproductDetails((prevproduct) => {
    //             return (
    //                 prevproduct=  JSON.parse(window.sessionStorage.getItem("newItem")
    //                 )
    //         )
    //     })
    // },[])
    // let thisproduct =productDetails.pop();
    let prevproduct = JSON.parse(window.sessionStorage.getItem("newItem"))
    return (
        <>

            <section className='mb-10 mt-10'>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div>
                        <h1 className="text-2xl text-black font-bold lg:text-3xl">{prevproduct.title }</h1>

                        <p className="mt-1 text-sm text-gray-500">Id:{prevproduct.id}</p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                        <div className="lg:col-span-3">
                            <div className="relative mt-4">
                                <img
                                    alt="Tee"
                                    src={prevproduct.img}
                                    className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                                />

                                {/* <div
                                    className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>

                                    <span className="ms-1.5 text-xs"> Hover to zoom </span>
                                </div> */}
                            </div>


                        </div>

                        <div className="lg:sticky lg:top-0">
                            <form className="space-y-4 lg:pt-8">
                                {/* <fieldset>
                                    <legend className="text-lg font-bold">Color</legend>

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        <label htmlFor="color_green" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_green"
                                                name="color"
                                                className="peer sr-only"
                                                checked
                                            />

                                            <span
                                                className="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_blue" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_blue"
                                                name="color"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_pink" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_pink"
                                                name="color"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_red" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_red"
                                                name="color"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>

                                        <label htmlFor="color_indigo" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="color_indigo"
                                                name="color"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                            ></span>
                                        </label>
                                    </div>
                                </fieldset> */}

                                <fieldset>
                                    <legend className="text-lg font-bold">Category</legend>

                                    <div className="mt-2 flex flex-wrap gap-1">
                                        <label htmlFor="material_cotton" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_cotton"
                                                name="material"
                                                className="peer sr-only"
                                                checked
                                            />

                                            <span
                                                className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                            >
                                                {prevproduct.category}
                                            </span>
                                        </label>

                                        <label htmlFor="material_wool" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                id="material_wool"
                                                name="material"
                                                className="peer sr-only"
                                                checked
                                            />


                                        </label>
                                    </div>
                                </fieldset>

                                <div className="rounded border bg-gray-100 p-4">
                                    <p className="">
                                        <span className="block text-black text-base mb-2"> Description </span>

                                        {/* <a href="" className="mt-1 inline-block underline"> Find out more </a> */}
                                        <p className='text-sm'>{prevproduct.description}</p>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl font-bold">$19.99</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded bg-[#867070] hover:shadow-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                                >
                                    Add to cart
                                </button>

                                {/* <button
                                    type="button"
                                    className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                                >
                                    Notify when on sale
                                </button> */}
                            </form>
                        </div>


                    </div>
                </div>
            </section>
            <hr className="h-1 mb-20 mx-8  bg-gray-200 border-0 dark:bg-gray-400" />
            <section className='mx-10'>
                <h1 className='text-3xl text-black ml-[5vw] mb-5 '>You might also like</h1>
                <div className='flex justify-around flex-wrap mb-12'>

                    <div key='' className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-primary m-5 rounded-md">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
                            />
                            <div className="flex items-center mt-5 justify-between">
                                <p className="">paper clips</p>
                                <p className="ml-20  text-gray-900">25 JD</p>
                            </div>

                            <div className='flex justify-center mt-3'>

                                <button className="btn btn-outline ">Add to cart

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: ml-2 h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                </button>
                            </div>

                        </a>
                    </div>
                    <div key='' className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-primary m-5 rounded-md">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
                            />
                            <div className="flex items-center mt-5 justify-between">
                                <p className="">paper clips</p>
                                <p className="ml-20 text-gray-900">25 JD</p>
                            </div>

                            <div className='flex justify-center mt-3'>

                                <button className="btn btn-outline ">Add to cart

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: ml-2 h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                </button>
                            </div>

                        </a>
                    </div>
                    <div key='' className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-primary m-5 rounded-md">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
                            />
                            <div className="flex items-center mt-5 justify-between">
                                <p className="">paper clips</p>
                                <p className="ml-20  text-gray-900">25 JD</p>
                            </div>

                            <div className='flex justify-center mt-3'>

                                <button className="btn btn-outline ">Add to cart

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: ml-2 h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                </button>
                            </div>

                        </a>
                    </div>
                    <div key='' className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-6 flex flex-col bg-primary m-5 rounded-md">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664514937ae81a71bbbd41ede792f992b6586ebe4.webp"
                            />
                            <div className="flex items-center mt-5 justify-between">
                                <p className="">paper clips</p>
                                <p className="ml-20  text-gray-900">25 JD</p>
                            </div>

                            <div className='flex justify-center mt-3'>

                                <button className="btn btn-outline ">Add to cart

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: ml-2 h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>

                                </button>
                            </div>

                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}
