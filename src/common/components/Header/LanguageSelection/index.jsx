import React from 'react'
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
      <select onChange={handleChange} value={locale} name="languages" id="languages-select">
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  )
}
