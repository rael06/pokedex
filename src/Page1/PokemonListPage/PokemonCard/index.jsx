import PokemonType from 'common/components/PokemonType'
import React from 'react'
import padder from 'common/helpers/padder'
import './style.css'

export default function PokemonCard({ id, name, image, types }) {
  return (
    <div className="pokemonCard">
      <p className="pokemonCardId">No.{padder('0', 3, id)}</p>
      <p className="pokemonCardName">{name}</p>
      <img alt="pic" src={image} style={{ width: '150px' }} />
      <div className="pokemonTypeWrapper">
        {types.map((type) => (
          <div key={id + name + type} className="pokemonTypeElement">
            <PokemonType type={type} />
          </div>
        ))}
      </div>
    </div>
  )
}
