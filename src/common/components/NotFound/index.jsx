import React from 'react'
import PureLink from 'common/components/PureLink'
import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import { Button } from '@material-ui/core'

const NotFound = () => {
  const { locale } = useLocale()

  return (
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
        <Button autoFocus color="primary">
          {translations['goBack'][locale]}
        </Button>
      </PureLink>
    </div>
  )
}

export default NotFound
