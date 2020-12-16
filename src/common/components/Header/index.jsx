import React from 'react'
import styles from './style.module.css'
import logo from './logo.svg'
import LanguageSelection from 'common/components/Header/LanguageSelection'
import PureLink from '../PureLink'

export default function Header() {
  return (
    <div className={styles.header}>
      <PureLink to="/pokemons">
        <img className={styles.logo} alt="logo" src={logo} />
      </PureLink>
      <LanguageSelection />
    </div>
  )
}
