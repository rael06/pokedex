import React from 'react'
import styles from './style.module.css'
import useLocalStorage from 'common/hooks/useLocalStorage'
import PokemonTypeCheckbox from './PokemonTypeCheckbox'

const PokemonTypeCheckboxxes = () => {
  const [checkedTypes, setCheckedTypes] = useLocalStorage('checkedTypes', [])
  console.log(checkedTypes)
  const addType = (value) => setCheckedTypes([...checkedTypes, value])
  const removeType = (value) => setCheckedTypes(checkedTypes.filter((type) => type !== value))

  return (
    <div className={styles.wrapper}>
      <PokemonTypeCheckbox type="poison" onCheck={addType} onUncheck={removeType} />
    </div>
  )
}

export default PokemonTypeCheckboxxes
