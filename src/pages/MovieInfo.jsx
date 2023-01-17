import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataById } from '../api/api'
import GenrateStars from '../components/GenrateStars'
import { motion } from 'framer-motion'
import {Link} from "react-router-dom";


function MovieInfo() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  const fetchMovie = async (id) => {
    const res = await fetchDataById(id)
    setMovie(res)
  }

  const handleStars = async () => {
    const response = await fetchDataById(id)
    const rating = response.imdbRating
    const numberOfStars = Math.floor(rating)
  }

  useEffect(() => {
    fetchMovie(id)
  }, [])

  useEffect(() => {
    handleStars()
  }, [])

  return (
    <div className='md:flex text-white md:h-[100vh] pb-10 '>
      <motion.div
        className='w-5/6 mr-6 md:w-1/3 '
      >
        <div className=' h-[90%] mt-6 ml-6  '>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className='w-full h-full rounded-xl'
          />
        </div>
      </motion.div>

      <motion.div
        className='w-2/3 p-4 '
      >
        <h1 className='text-4xl  mb-4 mt-2 relative '>
          {movie.Title}
        </h1>
        <p className='mb-7'>{movie.Plot}</p>
        <div className='flex items-center mb-4 '>
          <GenrateStars star={movie.imdbRating} />
        </div>
        <p className='mb-4 '>
          <span className='font-bold mr-2 '>Release date :</span>
          {movie.Released}
        </p>
        <p className='mb-4'>
          <span className='font-bold mr-2'>Genre:</span>
          {movie.Genre}
        </p>
        <p className='mb-4'>
          <span className='font-bold mr-2'>Cast:</span>
          {movie.Actors}
        </p>
        <p className='mb-4'>
          <span className='font-bold mr-2'>Language :</span>
          {movie.Language}
        </p>
        <p className='mb-4'>
          <span className='font-bold mr-2'>Runtime:</span>
          {movie.Runtime}
        </p>
      <Link to="/" className="home-button">Back</Link>
      </motion.div>
    </div>
  )
}

export default MovieInfo
