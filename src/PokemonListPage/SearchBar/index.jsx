import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import React from 'react'
import styles from './style.module.css'
import { Input } from '@material-ui/core'

export default function SearchBar({ handleChange, value }) {
  const { locale } = useLocale()
  return (
    <div className={styles.input}>
      <Input
        onChange={handleChange}
        value={value}
        placeholder={translations['pokemonSearchBarPlaceholder'][locale]}
      />
    </div>
  )
}
