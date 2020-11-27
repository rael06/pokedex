import React from 'react'
import styles from './style.module.css'
import { darker } from 'common/utils/color'
import localeTypes from './types.json'
import LocaleContext from '../../contexts/LocaleContext'

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
  const { locale } = React.useContext(LocaleContext)
  const color = typeColors[type]

  return (
    <div className={styles.wrapper} style={{ backgroundColor: color, borderColor: darker(color) }}>
      {localeTypes[type][locale]}
    </div>
  )
}
