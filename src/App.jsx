import React from 'react'
import styles from './style.module.css'
import PokemonListPage from 'Page1/PokemonListPage'
import Header from 'common/components/Header'

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subWrapper}>
        <Header />
      </div>

      <div className={styles.subWrapper}>
        <PokemonListPage />
      </div>
    </div>
  )
}
