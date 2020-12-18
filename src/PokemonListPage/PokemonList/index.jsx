import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import useLocale from 'common/hooks/useLocale'
import PureLink from 'common/components/PureLink'
import { getLocaleName } from 'common/utils/locale'
import { CircularProgress } from '@material-ui/core'
import translations from 'translations.json'

export default function PokemonList({ searchBy, searched, checkedTypes }) {
  const { locale } = useLocale()
  const [list, setList] = React.useState([])
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(false)
  }, [searched])

  React.useEffect(() => {
    let isMounted = true
    const isMoveSearched = (move) =>
      searched
        .trim()
        .split(' ')
        .filter((word) => !!move.match(new RegExp(word, 'i'))).length > 0

    const isTypeSearched = (type) =>
      !!getLocaleName(translations.types[type], locale).match(new RegExp(searched, 'i'))

    const isTypeSearchedInCheckedTypes = (type) => checkedTypes.includes(type)

    const filterByCheckedTypes = () =>
      pokemonList.filter(
        (pokemon) =>
          pokemon.types.filter(isTypeSearchedInCheckedTypes).length === checkedTypes.length
      )

    const currentList = checkedTypes.length > 0 ? filterByCheckedTypes() : pokemonList

    const filterByMove = () =>
      setList(
        currentList.filter(
          (pokemon) =>
            pokemon.moves.filter(isMoveSearched).length >= searched.trim().split(' ').length
        )
      )

    const filterByType = () =>
      setList(currentList.filter((pokemon) => pokemon.types.filter(isTypeSearched).length > 0))

    const filterByName = () =>
      setList(
        currentList.filter((pokemon) =>
          getLocaleName(pokemon.names, locale).toLowerCase().includes(searched.toLowerCase())
        )
      )

    const delay = (callBack) => {
      setIsLoaded(false)
      setTimeout(() => {
        if (isMounted) {
          callBack()
          setIsLoaded(true)
        }
      }, 500)
    }

    switch (searchBy) {
      case 'name':
        delay(filterByName)
        break
      case 'move':
        delay(filterByMove)
        break
      case 'type':
        delay(filterByType)
        break
      default:
        break
    }

    return () => {
      isMounted = false
    }
  }, [checkedTypes, locale, searchBy, searched])

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
