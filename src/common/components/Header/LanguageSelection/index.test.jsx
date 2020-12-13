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
    const locale = 'fr'
    render(
      <LocaleContext.Provider value={{ locale }}>
        <LanguageSelection />
        <SearchBar />
      </LocaleContext.Provider>
    )
    screen.getByPlaceholderText(getLocaleName(translations['pokemonSearchBarPlaceholder'], 'fr'), {
      exact: false,
    })
    const select = screen.getByTestId('language-selector-select')
    userEvent.selectOptions(select, ['de'])
    screen.getByPlaceholderText(getLocaleName(translations['pokemonSearchBarPlaceholder'], 'de'), {
      exact: false,
    })
  })
})
