import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import PokemonCard from './index'
import pokemonList from 'common/models/pokemons.json'

describe('PokemonCard component', () => {
  const mockPokemon = pokemonList[0]

  it('Should not display favourite star', () => {
    render(<PokemonCard isFavourite={false} pokemon={mockPokemon} toggleFavourite={() => {}} />)
    screen.getByText('☆')
  })

  it('Should display favourite star', () => {
    render(<PokemonCard isFavourite pokemon={mockPokemon} toggleFavourite={() => {}} />)
    screen.getByText('★')
  })

  it('Should toggle favourite star on click', () => {
    const onClick = jest.fn().mockImplementation((id) => {})

    render(<PokemonCard isFavourite={false} pokemon={mockPokemon} toggleFavourite={onClick} />)
    const starButton = screen.getByRole('button')
    userEvent.click(starButton)
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledWith(mockPokemon.id)
  })
})
