import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import React from 'react'
import styles from './style.module.css'
import { Input } from '@material-ui/core'
import { getLocaleName } from 'common/utils/locale'

export default function SearchBar({ searched, setSearched }) {
  const { locale } = useLocale()

  const handleChange = (event) => setSearched(event.target.value)

  return (
    <div className={styles.input}>
      <Input
        onChange={handleChange}
        value={searched}
        placeholder={getLocaleName(translations['pokemonSearchBarPlaceholder'], locale)}
      />
    </div>
  )
}
