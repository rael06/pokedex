import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from './pokemons.json'

export default function PokemonList({ searched }) {
  const list = pokemonList.filter((pokemon) =>
    pokemon.names.fr.toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <div className={styles.wrapper}>
      {list.length > 0 ? (
        list.map((pokemon) => (
          <div key={pokemon.id} className={styles.cardWrapper}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.names.fr}
              image={pokemon.image}
              types={pokemon.types}
            />
          </div>
        ))
      ) : (
        <p style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>Sorry, no result</p>
      )}
    </div>
  )
}
