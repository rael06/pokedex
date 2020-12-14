import { Button, makeStyles } from '@material-ui/core'
import PureLink from 'common/components/PureLink'
import useLocale from 'common/hooks/useLocale'
import { getLocaleName } from 'common/utils/locale'
import React from 'react'
import translations from 'translations.json'
import styles from './style.module.css'

const useStyles = makeStyles((theme) => {
  return {
    button: {
      backgroundColor: theme.palette.common.white,
    },
  }
})

const NotFound = () => {
  const classes = useStyles()
  const { locale } = useLocale()
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>404...</p>
      <PureLink to="/pokemons">
        <Button autoFocus variant="contained" className={classes.button}>
          {getLocaleName(translations['goBack'], locale)}
        </Button>
      </PureLink>
    </div>
  )
}

export default NotFound
