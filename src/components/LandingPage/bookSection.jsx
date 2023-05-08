import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



function BookSection() {

    const [nominees, setNominees] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://hapi-books.p.rapidapi.com/nominees/romance/2020',
            headers: {
                'X-RapidAPI-Key': '9dda88e499msh80c9e8008f62435p1d728djsnfa28e5eb5c06',
                'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
            }
        };

        async function fetchNominees() {
            try {
                const response = await axios.request(options);
                setNominees(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchNominees();
    }, []);
    console.log(nominees)
    const books = nominees.map((book) => {
        return (


            <div
                key={book.book_id}
                className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-[#F5EBEB] m-5 rounded-md"
            >
                <a href="#">
                    <img
                        id=''
                        onClick={''}
                        className="hover:grow hover:shadow-lg"
                        src={book.cover}
                    />
                    <div className="flex flex-wrap  items-center mt-5 justify-around">
                        <p className="">{book.name}</p>
                        <p className="  text-gray-900">5 JD</p>
                    </div>

                    <div className="flex flex-wrap justify-center mt-3 gap-2">
                        <button
                            className="btn btn-outline "
                            id=''
                            onClick={''}
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
                            id="122"
                            onClick={''}
                        >
                            {" "}
                            Details
                        </button>
                    </div>
                </a>
            </div>
        )
    })
    return (
        <>
        {books}
        </>
    )
}

export default BookSection