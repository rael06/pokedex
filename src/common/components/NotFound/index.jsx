import React from 'react'
import PureLink from 'common/components/PureLink'
import locale from 'common/hooks/useLocale'
import { getLocaleName, translations } from 'common/utils/locale'

const NotFound = () => (
  <div
    style={{
      fontWeight: 'bold',
      fontSize: '40px',
      color: 'white',
      marginLeft: '30px',
    }}
  >
    404...
    <PureLink to="/pokemons">
      <button>{getLocaleName(translations['goBack'], locale)}</button>
    </PureLink>
  </div>
)

export default NotFound
