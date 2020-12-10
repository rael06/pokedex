import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import styles from './style.module.css'
import LocaleContext from 'common/contexts/LocaleContext'
import pokemons from 'common/models/pokemons.json'

export default function LanguageSelection() {
  const { locale, setLocale } = React.useContext(LocaleContext)

  const locales = pokemons
    .map((pokemon) => Object.keys(pokemon.names))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index)

  const handleChange = (event) => {
    setLocale(event.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="languages-select"></label>
      <Select onChange={handleChange} value={locale} name="languages" id="languages-select">
        {locales.map((locale) => (
          <MenuItem key={locale} value={locale}>
            {locale}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
