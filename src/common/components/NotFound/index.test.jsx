import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom'
import NotFound from './index'

describe('NotFound component', () => {
  it('Should display 404', () => {
    const history = createMemoryHistory()
    const route = '/bad-route'
    history.push(route)
    render(
      <Router history={history}>
        <NotFound />
      </Router>
    )
    screen.getByText(/404/i)
    const goBack = screen.getByRole('button', { name: /Go/i })
    userEvent.click(goBack)
    expect(history.location.pathname).toBe('/pokemons')
  })
})
