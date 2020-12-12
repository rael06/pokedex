import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import translations from 'translations.json'
import '@testing-library/jest-dom'
import NotFound from './index'
import LocaleContext from 'common/contexts/LocaleContext'

describe('NotFound component', () => {
  it('Should display 404', () => {
    const history = createMemoryHistory()
    const route = '/bad-route'
    const locale = 'fr'
    history.push(route)
    render(
      <LocaleContext.Provider value={{ locale }}>
        <Router history={history}>
          <NotFound />
        </Router>
      </LocaleContext.Provider>
    )
    screen.getByText(/404/i)
    const goBack = screen.getByRole('button', { name: new RegExp(translations['goBack'][locale]) })
    userEvent.click(goBack)
    expect(history.location.pathname).toBe('/pokemons')
  })
})
