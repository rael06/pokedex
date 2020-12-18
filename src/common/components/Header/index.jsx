import React from 'react'
import styles from './style.module.css'
import logo from './logo.svg'
import LanguageSelection from 'common/components/Header/LanguageSelection'
import PureLink from '../PureLink'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 25,
    color: 'white',
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={styles.header}>
      <PureLink to="/pokemons">
        <img className={styles.logo} alt="logo" src={logo} />
      </PureLink>
      <PureLink to="/pokemons/favourites" className={classes.root}>
        Favourites
      </PureLink>
      <LanguageSelection />
    </div>
  )
}
