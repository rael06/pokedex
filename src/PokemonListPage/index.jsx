import React from 'react'
import styles from './style.module.css'
import PokemonList from 'PokemonListPage/PokemonList'
import SearchBar from 'PokemonListPage/SearchBar'
import useLocalStorage from 'common/hooks/useLocalStorage'
import { Route } from 'react-router-dom'
import PokemonDetails from 'PokemonListPage/PokemonDetails'
import SearchBy from 'PokemonListPage/SearchBy'

export default function PokemonListPage() {
  const [searched, setSearched] = useLocalStorage('searchedPokemon', '')
  const [searchBy, setSearchBy] = useLocalStorage('searchBy', 'name')

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchBy searchBy={searchBy} onSelect={setSearchBy} />
        <SearchBar searched={searched} setSearched={setSearched} />
      </div>

      <Route path="/pokemons/:id" exact>
        <PokemonDetails />
      </Route>
      <PokemonList searched={searched} searchBy={searchBy} />
    </div>
  )
}
