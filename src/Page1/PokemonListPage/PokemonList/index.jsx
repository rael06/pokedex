import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import useLocale from 'common/hooks/useLocale'
import PureLink from 'common/components/PureLink'
import { getLocaleName } from 'common/utils/locale'

export default function PokemonList({ searched }) {
  const locale = useLocale()

  const list = pokemonList.filter((pokemon) =>
    getLocaleName(pokemon.names, locale).toLowerCase().includes(searched.toLowerCase())
  )

  return (
    <div className={styles.wrapper}>
      {list.length > 0 ? (
        list.map((pokemon) => (
          <div key={pokemon.id} className={styles.cardWrapper}>
            <PureLink to={`/pokemons/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </PureLink>
          </div>
        ))
      ) : (
        <p style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>Sorry, no result</p>
      )}
    </div>
  )
}
