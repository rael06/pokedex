import React from 'react'
import styles from './style.module.css'
import PokemonType from 'common/components/PokemonType'

const PokemonTypeCheckbox = ({ type, onCheck, onUncheck }) => {
  const [checked, setChecked] = React.useState(false)
  const pokemonTypeCheckbox = React.useRef(null)

  const handleClick = () => {
    setChecked(!checked)
    const value = pokemonTypeCheckbox.current.getAttribute('value')
    !checked ? onCheck(value) : onUncheck(value)
  }

  return (
    <div className={styles.wrapper} onClick={handleClick} ref={pokemonTypeCheckbox} value={type}>
      <label id={`checkbox_${type}`}>
        <PokemonType type={type} />
      </label>
      <input
        onChange={(event) => event.stopPropagation()}
        htmlFor={`checkbox_${type}`}
        type="checkbox"
        checked={checked}
      />
    </div>
  )
}

export default PokemonTypeCheckbox
