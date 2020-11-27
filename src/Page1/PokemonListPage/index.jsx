import React from 'react'
import styles from './style.module.css'
import PokemonList from 'Page1/PokemonListPage/PokemonList'
import SearchBar from 'Page1/PokemonListPage/SearchBar'
import useLocalStorage from '../../common/hooks/useLocalStorage'

export default function PokemonListPage() {
  const [searched, setSearched] = useLocalStorage('searchedPokemon', '')

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
