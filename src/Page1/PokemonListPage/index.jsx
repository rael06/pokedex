import React from 'react'
import styles from './style.module.css'
import PokemonList from 'Page1/PokemonListPage/PokemonList'
import SearchBar from 'Page1/PokemonListPage/SearchBar'

export default function PokemonListPage() {
  const [searched, setSearched] = React.useState('')

  const handleChange = (event) => setSearched(event.target.value)
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <SearchBar handleChange={handleChange} value={searched} />
      </div>
      <PokemonList searched={searched} />
    </div>
  )
}
