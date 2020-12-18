import PokemonType from 'common/components/PokemonType'
import React from 'react'
import padder from 'common/utils/padder'
import styles from './style.module.css'
import { getLocaleName } from 'common/utils/locale'
import useLocale from 'common/hooks/useLocale'
import pokeball from './pokeball.png'
import FavouriteStar from 'common/components/FavouriteStar'

export default function PokemonCard({ pokemon, toggleFavourite, isFavourite }) {
  const { locale } = useLocale()
  const [image, setImage] = React.useState()

  const handleFavouriteClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
    toggleFavourite(pokemon.id)
  }

  React.useEffect(() => {
    let isMounted = true
    setTimeout(() => {
      if (isMounted) setImage(pokemon.image)
    }, 100)
    return () => {
      isMounted = false
    }
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.id}>No.{padder('0', 3, pokemon.id)}</p>
        {toggleFavourite && (
          <FavouriteStar isFavourite={isFavourite} onClick={handleFavouriteClick}></FavouriteStar>
        )}
      </div>
      <p className={styles.name}>{getLocaleName(pokemon.names, locale)}</p>
      <img className={styles.image} alt="pic" src={image ? image : pokeball} />
      <div className={styles.types}>
        {pokemon.types.map((type) => (
          <div key={type} className={styles.type}>
            <PokemonType type={type} />
          </div>
        ))}
      </div>
    </div>
  )
}
