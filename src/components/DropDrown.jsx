import React, { useState } from 'react'
import { useContext } from 'react'
import { mainMoviesContext } from '../App'
import { motion } from 'framer-motion'

const Dropdown = () => {
  const { setMainMovies } = useContext(mainMoviesContext)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const options = ['1989', '1995', '2000', '2020', '2021', '2022']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    setSelectedOption(option)
    setMainMovies(option)
    setIsOpen(false)
  }

  return (
    <div className='relative inline-block text-left    w-4/6 md:w-1/6'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            onClick={toggleDropdown}
            className='inline-flex justify-between w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'
          >
            {selectedOption || 'Select year..'}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>
      {isOpen && (
        <div className=''>
          <div className='rounded-md bg-white shadow-xs'>
            <div
              role='menu'
              aria-orientation='horizontal'
              aria-labelledby='options-menu'
            >
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option)}
                  type='button'
                  className='block w-full text-left px-4 py-2 text-sm leading-5 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
                  role='menuitem'
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
