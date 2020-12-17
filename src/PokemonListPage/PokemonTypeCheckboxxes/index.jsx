import React from 'react'
import styles from './style.module.css'
import PokemonTypeCheckbox from './PokemonTypeCheckbox'

const PokemonTypeCheckboxxes = ({ addType, removeType }) => {
  return (
    <div className={styles.wrapper}>
      <PokemonTypeCheckbox type="poison" onCheck={addType} onUncheck={removeType} />
    </div>
  )
}

export default PokemonTypeCheckboxxes
