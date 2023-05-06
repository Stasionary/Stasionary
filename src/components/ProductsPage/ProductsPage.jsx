import React from 'react'
import Products from '../Products.json'

const ProductsPage = () => {
    console.log(Products)
    const Cards = Products.map((product, index) => {
        return (


            <div key={index} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-primary m-5 rounded-md">
                <a href="#">
                    <img
                        className="hover:grow hover:shadow-lg"
                        src={product.img}
                    />
                    <div className="flex items-center mt-5 justify-between">
                        <p className="">{product.title}</p>
                        <p className="ml-20  text-gray-900">{product.price} JD</p>
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

        )
    })
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
                                    Writing Instruments                                </a>
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




            </>


        </div>
    )
}

export default ProductsPage