import React from 'react'
import styles from 'style.module.css'
import PokemonType from 'common/components/PokemonType'
import useLocalStorage from '../../../common/hooks/useLocalStorage'

const PokemonTypeCheckbox = ({ type, onCheck, onUncheck }) => {
  const [checked, setChecked] = useLocalStorage(`checkbox_${type}`, false)

  const pokemonTypeCheckbox = React.useRef(null)

  //console.log(checkedTypes)

  const handleClick = () => {
    setChecked(!checked)
    const value = pokemonTypeCheckbox.current.getAttribute('value')
    checked ? onCheck(value) : onUncheck(value)
  }

  return (
    <div onClick={handleClick} ref={pokemonTypeCheckbox} value="poison">
      <label id={`checkbox_${type}`}>
        <PokemonType type={type} />
      </label>
      <input htmlFor={`checkbox_${type}`} type="checkbox" />
    </div>
  )
}

export default PokemonTypeCheckbox
