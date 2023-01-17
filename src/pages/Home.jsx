import React from 'react'
import { useEffect, useContext } from 'react'
import Header from '../components/Header'
import TopMovies from '../components/TopMovies'
import SearchMovie from '../components/SearchMovie'
import { searchContext } from '../App'

const Home = () => {
  const { search } = useContext(searchContext)
  useEffect(() => {
  }, [])
  return (
    <>
      <Header />
      {search === '' ? <TopMovies /> : <SearchMovie />}
    </>
  )
}

export default Home
