import React from 'react'
import styles from './style.module.css'
import PokemonListPage from 'Page1/PokemonListPage'
import Header from 'common/components/Header'

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
      </div>

      <div className={styles.wrapper}>
        <PokemonListPage />
      </div>
    </div>
  )
}
