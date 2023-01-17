import Home from './Home'
import MovieInfo from './MovieInfo'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieInfo />} />
      </Routes>
    </div>
  )
}

export default Pages
