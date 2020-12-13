import React from 'react'
import styles from './style.module.css'
import PokemonList from 'PokemonListPage/PokemonList'
import SearchBar from 'PokemonListPage/SearchBar'
import useLocalStorage from 'common/hooks/useLocalStorage'
import { Route } from 'react-router-dom'
import PokemonDetails from 'PokemonListPage/PokemonDetails/index'

export default function PokemonListPage() {
  const [searched, setSearched] = useLocalStorage('searchedPokemon', '')

  const handleChange = (event) => setSearched(event.target.value)

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <SearchBar handleChange={handleChange} value={searched} />
      </div>

      <Route path="/pokemons/:id" exact>
        <div>test</div>
        <PokemonDetails />
      </Route>
      <PokemonList searched={searched} />
    </div>
  )
}
