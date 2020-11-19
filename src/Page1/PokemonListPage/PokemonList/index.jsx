import React from 'react'
import './style.css'
import PokemonCard from 'Page1/PokemonListPage/PokemonCard'
import pokemonList from './pokemons.json'

export default function PokemonList() {
  return (
    <div className="pokemonList">
      {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemonCardWrapper">
          <PokemonCard
            id={pokemon.id}
            name={pokemon.names.fr}
            image={pokemon.image}
            types={pokemon.types}
          />
        </div>
      ))}
    </div>
  )
}
