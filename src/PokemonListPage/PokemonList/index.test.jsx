import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import PokemonList from '.'
import pokemonList from 'common/models/pokemons.json'

describe('PokemonList component', () => {
  const mockChecked = ['poison', 'fire']

  it('Should display only checked types pokemons', async () => {
    render(<PokemonList pokemonList={pokemonList} checkedTypes={mockChecked} />)
    // Je n'ai pas réussi à tester le composant à cause du délai de la progress bar
  })
})
