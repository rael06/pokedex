import useLocale from 'common/hooks/useLocale'
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
        placeholder={translations['pokemonSearchBarPlaceholder'][locale]}
      />
    </>
  )
}
