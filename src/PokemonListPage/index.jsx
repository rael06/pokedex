import React from 'react'
import styles from './style.module.css'
import PokemonList from 'PokemonListPage/PokemonList'
import pokemonList from 'common/models/pokemons.json'
import SearchBar from 'PokemonListPage/SearchBar'
import useLocalStorage from 'common/hooks/useLocalStorage'
import { Route } from 'react-router-dom'
import PokemonDetails from 'PokemonListPage/PokemonDetails'
import SearchBy from 'PokemonListPage/SearchBy'
import PokemonTypeCheckboxxes from 'PokemonListPage/PokemonTypeCheckboxxes'

export default function PokemonListPage() {
  const [searched, setSearched] = useLocalStorage('searchedPokemon', '')
  const [searchBy, setSearchBy] = useLocalStorage('searchBy', 'name')
  const [checkedTypes, setCheckedTypes] = React.useState([])

  const addType = (value) => setCheckedTypes([...checkedTypes, value])
  const removeType = (value) => setCheckedTypes(checkedTypes.filter((type) => type !== value))
  const [favourites, setFavourites] = React.useState([])

  const addFavourite = (pokemonId) => setFavourites([...favourites, pokemonId])
  const removeFavourite = (pokemonId) => setFavourites(favourites.filter((id) => id !== pokemonId))

  const toggleFavourite = (pokemonId) =>
    favourites.includes(pokemonId) ? removeFavourite(pokemonId) : addFavourite(pokemonId)

  return (
    <div className={styles.wrapper}>
      <Route path="/pokemons/:id" exact>
        <PokemonDetails toggleFavourite={toggleFavourite} favourites={favourites} />
      </Route>

      <Route path="/pokemons/favourites" exact>
        <PokemonList
          pokemonList={pokemonList.filter((pokemon) => favourites.includes(pokemon.id))}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
          searched={searched}
          searchBy={searchBy}
          checkedTypes={checkedTypes}
        />
      </Route>

      <div className={styles.search}>
        <SearchBy searchBy={searchBy} onSelect={setSearchBy} />
        <SearchBar searched={searched} setSearched={setSearched} />
      </div>

      <PokemonTypeCheckboxxes addType={addType} removeType={removeType} />

      <PokemonList
        pokemonList={pokemonList}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
        searched={searched}
        searchBy={searchBy}
        checkedTypes={checkedTypes}
      />
    </div>
  )
}
