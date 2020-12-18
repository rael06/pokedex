import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'PokemonListPage/PokemonCard'

export default function PokemonFavourites({ pokemonList }) {
  return (
    <div className={styles.wrapper}>
      {pokemonList.length > 0 ? (
        pokemonList.map((pokemon) => (
          <div key={pokemon.id} className={styles.cardWrapper}>
            <PokemonCard isFavourite pokemon={pokemon} />
          </div>
        ))
      ) : (
        <p className={styles.noResultText}>Sorry, no result</p>
      )}
    </div>
  )
}
