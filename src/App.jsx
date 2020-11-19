import React from 'react'
import './style.css'
import PokemonListPage from 'Page1/PokemonListPage'
import Header from 'common/components/Header'

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
      </div>

      <div className="wrapper">
        <PokemonListPage />
      </div>
    </div>
  )
}
