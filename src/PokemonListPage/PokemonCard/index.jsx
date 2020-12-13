import PokemonType from 'common/components/PokemonType'
import React from 'react'
import padder from 'common/utils/padder'
import styles from './style.module.css'
import { getLocaleName } from 'common/utils/locale'
import useLocale from 'common/hooks/useLocale'

export default function PokemonCard({ pokemon }) {
  const { locale } = useLocale()

  return (
    <div className={styles.wrapper}>
      <p className={styles.id}>No.{padder('0', 3, pokemon.id)}</p>
      <p className={styles.name}>{getLocaleName(pokemon.names, locale)}</p>
      <img className={styles.image} alt="pic" src={pokemon.image} />
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
