import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LocaleContext from 'common/contexts/LocaleContext'
import { getLocaleName } from 'common/utils/locale'
import SearchBar from 'PokemonListPage/SearchBar'
import React from 'react'
import LanguageSelection from '.'
import translations from 'translations.json'

describe('NotFound component', () => {
  it('Should change locale', () => {
    let locale = 'fr'
    const setLocale = (newLocale) => {
      locale = newLocale
    }

    render(
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <LanguageSelection />
        <SearchBar />
      </LocaleContext.Provider>
    )
    screen.getByPlaceholderText(getLocaleName(translations['pokemonSearchBarPlaceholder'], 'fr'), {
      exact: false,
    })

    const button = screen.getByRole('button', { name: 'fr' })
    userEvent.click(button)
    const option = screen.getByText('it')
    userEvent.click(option)

    render(
      <LocaleContext.Provider value={{ locale }}>
        <LanguageSelection />
        <SearchBar />
      </LocaleContext.Provider>
    )
    screen.getByPlaceholderText(getLocaleName(translations['pokemonSearchBarPlaceholder'], 'it'), {
      exact: false,
    })
  })
})
