import React from 'react'
import styles from './style.module.css'
import PokemonTypeCheckbox from './PokemonTypeCheckbox'
import translations from 'translations.json'

const PokemonTypeCheckboxxes = ({ addType, removeType }) => {
  const types = Object.values(translations.types).map((type) => type.en.toLowerCase())

  return (
    <div className={styles.wrapper}>
      {types.map((type) => (
        <div key={type} className={styles.pokemonTypeCheckbox}>
          <PokemonTypeCheckbox type={type} onCheck={addType} onUncheck={removeType} />
        </div>
      ))}
    </div>
  )
}

export default PokemonTypeCheckboxxes
