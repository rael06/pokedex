import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from './pokemons.json'

export default function PokemonList() {
  return (
    <div className={styles.pokemonList}>
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className={styles.pokemonCardWrapper}>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.names.fr}
            image={pokemon.image}
            types={pokemon.types}
          />
        </div>
      ))}
    </div>
  )
}
