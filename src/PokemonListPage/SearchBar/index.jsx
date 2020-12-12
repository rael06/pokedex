import useLocale from 'common/hooks/useLocale'
import { getLocaleName } from 'common/utils/locale'
import translations from 'translations.json'
import React from 'react'
import styles from './style.module.css'

export default function SearchBar({ handleChange, value }) {
  const { locale } = useLocale()
  return (
    <>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        placeholder={getLocaleName(translations['pokemonSearchBarPlaceholder'], locale)}
      />
    </>
  )
}
