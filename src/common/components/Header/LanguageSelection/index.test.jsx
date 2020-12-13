import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LocaleContext from 'common/contexts/LocaleContext'
import React from 'react'

describe('NotFound component', () => {
  it('Should change locale', () => {
    const locale = 'fr'
    render(<LocaleContext.Provider value={{ locale }}></LocaleContext.Provider>)
  })
})
