import { useState, useEffect, createContext } from 'react'

import './App.css'
import Pages from './pages/Pages'

export const mainMoviesContext = createContext({})
export const searchContext = createContext({})

function App() {
  const [mainMovies, setMainMovies] = useState('2021')
  const [search, setSearch] = useState('')
  return (
    <div>
      <mainMoviesContext.Provider value={{ mainMovies, setMainMovies }}>
        <searchContext.Provider value={{ search, setSearch }}>
          <Pages />
        </searchContext.Provider>
      </mainMoviesContext.Provider>
    </div>
  )
}

export default App
