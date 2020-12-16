import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import useLocale from 'common/hooks/useLocale'
import PureLink from 'common/components/PureLink'
import { getLocaleName } from 'common/utils/locale'
import { CircularProgress } from '@material-ui/core'

export default function PokemonList({ searchBy, searched }) {
  const { locale } = useLocale()
  const [list, setList] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(false)
  }, [searched])

  React.useEffect(() => {
    const isMoveContained = (move) => !!move.match(new RegExp(searched))

    const filterByMove = () =>
      setList(pokemonList.filter((pokemon) => pokemon.moves.filter(isMoveContained).length > 0))

    const filterByName = () =>
      setList(
        pokemonList.filter((pokemon) =>
          getLocaleName(pokemon.names, locale).toLowerCase().includes(searched.toLowerCase())
        )
      )

    setTimeout(() => {
      switch (searchBy) {
        case 'name':
          filterByName()
          break
        case 'move':
          filterByMove()
          break
        default:
          break
      }
      setIsLoaded(true)
    }, 500)
  }, [locale, searchBy, searched])

  return (
    <div className={styles.wrapper}>
      {isLoaded ? (
        list.length > 0 ? (
          list.map((pokemon) => (
            <div key={pokemon.id} className={styles.cardWrapper}>
              <PureLink to={`/pokemons/${pokemon.id}`}>
                <PokemonCard pokemon={pokemon} />
              </PureLink>
            </div>
          ))
        ) : (
          <p className={styles.noResultText}>Sorry, no result</p>
        )
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  )
}
