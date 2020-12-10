import useLocale from 'common/hooks/useLocale'
import { getLocaleName, translations } from 'common/utils/locale'
import React from 'react'
import { TextField } from '@material-ui/core'
import useStyles from './style.js'

export default function SearchBar({ handleChange, value }) {
  const locale = useLocale()
  const classes = useStyles()

  return (
    <>
      <TextField
        onChange={handleChange}
        value={value}
        placeholder={getLocaleName(translations['pokemonSearchBarPlaceholder'], locale)}
        InputProps={{ classes: { root: classes.input } }}
      />
    </>
  )
}
