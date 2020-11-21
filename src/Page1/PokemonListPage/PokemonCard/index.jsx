import PokemonType from 'common/components/PokemonType'
import React from 'react'
import padder from 'common/utils/padder'
import styles from './style.module.css'

export default function PokemonCard({ id, name, image, types }) {
  return (
    <div className={styles.pokemonCard}>
      <p className={styles.pokemonCardId}>No.{padder('0', 3, id)}</p>
      <p className={styles.pokemonCardName}>{name}</p>
      <img alt="pic" src={image} style={{ width: '120px' }} />
      <div className={styles.pokemonTypeWrapper}>
        {types.map((type) => (
          <div key={id + name + type} className={styles.pokemonTypeElement}>
            <PokemonType type={type} />
          </div>
        ))}
      </div>
    </div>
  )
}
