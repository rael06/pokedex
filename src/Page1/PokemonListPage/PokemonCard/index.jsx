import React from 'react'
import './style.css'

export default function PokemonCard({ id, name, image, types }) {
  return (
    <div className="pokemonCard">
      <p>No.{id}</p>
      <p>{name}</p>
      <img alt="pic" src={image} />
      <p>{types.join(', ')}</p>
    </div>
  )
}
