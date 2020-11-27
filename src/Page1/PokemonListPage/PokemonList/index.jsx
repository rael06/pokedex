import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from './pokemons.json'
import LocaleContext from '../../../common/contexts/LocaleContext'

export default function PokemonList({ searched }) {
  const { locale } = React.useContext(LocaleContext)

  const getLocaleName = (pokemon) =>
    pokemon.names[locale] ? pokemon.names[locale] : pokemon.names.en

  const list = pokemonList.filter((pokemon) =>
    getLocaleName(pokemon).toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <div className={styles.wrapper}>
      {list.length > 0 ? (
        list.map((pokemon) => (
          <div key={pokemon.id} className={styles.cardWrapper}>
            <PokemonCard
              id={pokemon.id}
              name={getLocaleName(pokemon)}
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
