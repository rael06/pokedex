import useLocale from 'common/hooks/useLocale'
import { getLocaleName, translations } from 'common/utils/locale'
import React from 'react'
import styles from './style.module.css'

export default function SearchBar({ handleChange, value }) {
  return (
    <>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        placeholder={getLocaleName(translations['pokemonSearchBarPlaceholder'], useLocale())}
      />
    </>
  )
}
