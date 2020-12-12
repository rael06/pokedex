import React from 'react'
import styles from './style.module.css'
import pokemons from 'common/models/pokemons.json'
import useLocale from 'common/hooks/useLocale'

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
