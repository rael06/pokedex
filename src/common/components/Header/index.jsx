import React from 'react'
import styles from './style.module.css'
import logo from './logo.svg'

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} alt="logo" src={logo} />
      <p style={{ color: 'orange' }}>language selection</p>
    </div>
  )
}
