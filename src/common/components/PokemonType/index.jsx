import useLocale from 'common/hooks/useLocale'
import { darker } from 'common/utils/color'
import React from 'react'
import translations from 'translations.json'
import styles from './style.module.css'
import { getLocaleName } from 'common/utils/locale'

// const regex = /(?:"types": \["([a-z]+)"(?:, "([a-z]+)")*\],)/

const typeColors = {
  poison: '#A33EA1',
  grass: '#7AC74C',
  flying: '#A98FF3',
  fire: '#EE8130',
  water: '#6390F0',
  bug: '#A6B91A',
  normal: '#A8A77A',
  electric: '#F7D02C',
  ground: '#E2BF65',
  fairy: '#D685AD',
  fighting: '#C22E28',
  psychic: '#F95587',
  rock: '#B6A136',
  ice: '#96D9D6',
  steel: '#B7B7CE',
  ghost: '#735797',
  dragon: '#6F35FC',
}

export default function PokemonType({ type }) {
  const color = typeColors[type]
  const { locale } = useLocale()

  return (
    <div className={styles.wrapper} style={{ backgroundColor: color, borderColor: darker(color) }}>
      {getLocaleName(translations.types[type], locale)}
    </div>
  )
}
