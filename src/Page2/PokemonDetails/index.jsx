import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import { useParams } from 'react-router'
import PureLink from 'common/components/PureLink'
import useLocale from 'common/hooks/useLocale'
import { getLocaleName } from 'common/utils/locale'
import { translations } from 'common/utils/locale'

const PokemonDetails = () => {
  const locale = useLocale()
  const { id } = useParams()
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))

  return (
    <div className={styles.wrapper}>
      <PokemonCard pokemon={pokemon} />
      <PureLink to="/">
        <button>{getLocaleName(translations['goBack'], locale)}</button>
      </PureLink>
    </div>
  )
}

export default PokemonDetails
