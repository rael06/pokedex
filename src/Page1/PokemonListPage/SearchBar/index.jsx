import React from 'react'
import styles from './style.module.css'

export default function SearchBar({ handleChange, value }) {
  return (
    <>
      <input
        className={styles.input}
        onChange={handleChange}
        value={value}
        placeholder="Entrez un nom de pokemon"
      />
    </>
  )
}
