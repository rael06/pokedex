import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import { usePokemonLocaleName } from 'common/hooks/usePokemonLocaleName'
import pokemonList from 'common/models/pokemons.json'
import { useParams } from 'react-router'
import PureLink from 'common/components/PureLink'

const PokemonDetails = () => {
  const { id } = useParams()
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))
  const name = usePokemonLocaleName(pokemon)

  return (
    <div className={styles.wrapper}>
      <PokemonCard id={pokemon.id} name={name} image={pokemon.image} types={pokemon.types} />
      <PureLink to="/">
        <button>Retour</button>
      </PureLink>
    </div>
  )
}

export default PokemonDetails
