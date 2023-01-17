import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { searchContext } from '../App'
import MainImg from '../images/fastandfurious.jpg'
import {Link} from "react-router-dom";


const Header = () => {
  const { search, setSearch } = useContext(searchContext)
  const [input, setInput] = useState('')

  useEffect(() => {
  }, [search])

  return (
    <section className='w-full'>
      <div className='relative text-center mb-2 bg-top bg-cover bg-no-repeat min-h-[65vh]' style={{ backgroundImage: `url(${MainImg})` }}>
        <Link to="/"
          className='heading mt-5 absolute text-black text-3xl md:text-4xl lg:text-6xl left-1/2 translate-x-[-50%]'
        >
          Movies Info
        </Link>
        <div
          className='absolute text-black rounded-md shadow-sm top-3/4	left-1/2 translate-x-[-50%]'
        >
          <input
            type='search'
            className='pl-9	pr-4 form-input py-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
            placeholder='Search Movie'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type='submit'
            onClick={() => setSearch(input)}
            className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
