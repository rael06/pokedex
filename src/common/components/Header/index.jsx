import React from 'react'
import styles from './style.module.css'
import logo from './logo.svg'
import LanguageSelection from 'common/components/Header/LanguageSelection'

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="logo" src={logo} />
      <LanguageSelection />
    </div>
  )
}
