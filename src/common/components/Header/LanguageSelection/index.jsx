import React from 'react'
import styles from './style.module.css'
import pokemons from 'common/models/pokemons.json'
import useLocale from 'common/hooks/useLocale'
import { Select, MenuItem, InputLabel } from '@material-ui/core'

const locales = pokemons
  .map((pokemon) => Object.keys(pokemon.names))
  .flat()
  .filter((value, index, self) => self.indexOf(value) === index)

export default function LanguageSelection() {
  const { locale, setLocale } = useLocale()

  const handleChange = (event) => {
    setLocale(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <InputLabel id="languages-selector-label"></InputLabel>
      <Select
        data-testid="language-selector-select"
        htmlFor="languages-selector-label"
        onChange={handleChange}
        value={locale}
        name="languages"
        id="languages-select"
      >
        {locales.map((locale) => (
          <MenuItem key={locale} value={locale}>
            {locale}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
