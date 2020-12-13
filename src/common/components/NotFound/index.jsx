import React from 'react'
import PureLink from 'common/components/PureLink'
import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import { getLocaleName } from 'common/utils/locale'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import styles from './style.module.css'

const NotFound = () => {
  const { locale } = useLocale()
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  })

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>404...</p>
      <PureLink to="/pokemons">
        <MuiThemeProvider theme={theme}>
          <Button autoFocus variant="contained" color="primary">
            {getLocaleName(translations['goBack'], locale)}
          </Button>
        </MuiThemeProvider>
      </PureLink>
    </div>
  )
}

export default NotFound
