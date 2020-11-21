import React from 'react'
import styles from './style.module.css'
import PokemonList from 'Page1/PokemonListPage/PokemonList'

export default function PokemonListPage() {
  return (
    <div className={styles.pokemonListPage}>
      <PokemonList />
    </div>
  )
}
