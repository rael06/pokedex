import '@testing-library/jest-dom'
import { getAllByText, render, screen } from '@testing-library/react'
import React from 'react'
import PokemonList from '.'
import pokemonList from 'common/models/pokemons.json'
import { BrowserRouter, Route } from 'react-router-dom'

describe('PokemonList component', () => {
  const mockChecked = ['psychic', 'water']

  it('Should display only checked types pokemons', async () => {
    render(
      <BrowserRouter>
        <Route path="/">
          <PokemonList
            pokemonList={pokemonList}
            checkedTypes={mockChecked}
            noDelay
            searchBy="name"
            searched=""
            favourites={[]}
          />
        </Route>
      </BrowserRouter>
    )
    const numberOfPsychicPokemon = screen.getAllByText(/psychic/i).lenght
    const numberOfWaterPokemon = screen.getAllByText(/water/i).lenght
    const numberOfPokemonDisplayed = screen.getAllByText(/no\./i).lenght

    expect(numberOfPsychicPokemon).toBe(numberOfPokemonDisplayed)
    expect(numberOfWaterPokemon).toBe(numberOfPokemonDisplayed)
  })
})
