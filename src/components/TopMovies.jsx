import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { fetchDataByTitle } from '../api/api'
import DropDrown from './DropDrown'
import { Link } from 'react-router-dom'
import { mainMoviesContext } from '../App'

const TopMovies = () => {
  const { mainMovies } = useContext(mainMoviesContext)
  const [topMovies, setTopMovies] = useState([])

  const fetchYears = async (title) => {
    const res = await fetchDataByTitle(title)
    setTopMovies(res.Search)
  }

  useEffect(() => {
    fetchYears(mainMovies)
  }, [mainMovies])

  return (
    <>
      <div className=' w-10/12 mx-auto mt-5 flex justify-center'>
        <DropDrown />
      </div>

      <div className='mt-11 w-11/12 mx-auto min-h-[80px] grid grid-cols-2 lg:grid-cols-4 justify-start gap-5 pb-16'>
        {topMovies.map((movie, index) => {
          return (
            <Link to={`/movies/${movie.imdbID}`}>
              <div className='movieWrapper bg-transparent mx-auto rounded-xl overflow-hidden w-full gap-16 border cursor-pointer'>
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
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default TopMovies
