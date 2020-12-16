import React from 'react'
import styles from './style.module.css'
import useLocale from 'common/hooks/useLocale'
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import { getLocaleName } from 'common/utils/locale'
import translations from 'translations.json'

const options = Object.keys(translations['searchBy'])

export default function SearchBy({ searchBy, onSelect }) {
  const { locale } = useLocale()
  const handleChange = (event) => onSelect(event.target.value)

  return (
    <div className={styles.wrapper}>
      <InputLabel id="searchBy-selector-label">
        {getLocaleName(translations['searchByLabel'], locale)}
      </InputLabel>
      <Select
        htmlFor="searchBy-selector-label"
        onChange={handleChange}
        value={searchBy}
        name="searchBy"
        id="searchBy-select"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {getLocaleName(translations['searchBy'][option], locale)}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
