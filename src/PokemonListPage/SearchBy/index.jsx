import React from 'react'
import styles from './style.module.css'
import useLocale from 'common/hooks/useLocale'
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import { firstCharUppercase } from 'common/utils/strings'

const options = ['name', 'move']

export default function SearchBy({ searchBy, onSelect }) {
  const handleChange = (event) => onSelect(event.target.value)

  return (
    <div className={styles.wrapper}>
      <InputLabel id="searchBy-selector-label"></InputLabel>
      <Select
        htmlFor="searchBy-selector-label"
        onChange={handleChange}
        value={searchBy}
        name="searchBy"
        id="searchBy-select"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {firstCharUppercase(option)}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
