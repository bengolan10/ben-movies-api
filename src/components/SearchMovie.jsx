import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { fetchDataBySearch } from '../api/api'
import { Link } from 'react-router-dom'
import { searchContext } from '../App'

const SearchMovie = () => {
  const { search, setSearch } = useContext(searchContext)
  const [movies, setMovies] = useState([])

  const fetchMovies = async (search) => {
    const res = await fetchDataBySearch(search)
    setMovies(res.Search)
  }

  useEffect(() => {
    fetchMovies(search)
  }, [search])

  return (
    <>
      <div className='mt-11 w-11/12 mx-auto min-h-[80px] grid grid-cols-2 lg:grid-cols-4 justify-start gap-5 pb-16'>
        {movies.map((movie, index) => {
          return (
            <Link to={`/movies/${movie.imdbID}`} className='movieWrapper bg-transparent mx-auto rounded-xl overflow-hidden shadow-lg w-full gap-16 border cursor-pointer'>
              <img
                className='w-full h-[200px] sm:h-[400px]'
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className='px-6 py-4 h-[100px] flex justify-center'>
                <div
                  className='text-xl text-center mb-2 text-white'
                >
                  {movie.Title}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default SearchMovie
