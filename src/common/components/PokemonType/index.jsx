import React from 'react'
import './style.css'
import contrastor from 'common/helpers/contrastor'

// const regex = /(?:"types": \["([a-z]+)"(?:, "([a-z]+)")*\],)/
const typeColors = {
  fire: 'red',
  poison: 'purple',
  grass: 'green',
  flying: 'lightcyan',
  water: 'blue',
  bug: 'orange',
  normal: 'lightgrey',
  electric: 'yellow',
  ground: 'brown',
  fairy: 'pink',
  fighting: 'black',
  psychic: 'pink',
  rock: 'grey',
  steel: 'darkgrey',
  ice: 'lightblue',
  ghost: 'white',
  dragon: 'turquoise',
}
export default function PokemonType({ type }) {
  return (
    <div
      className={`pokemonType`}
      style={{ backgroundColor: typeColors[type], color: contrastor(typeColors[type]) }}
    >
      {type}
    </div>
  )
}
