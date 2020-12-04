import useLocale from './useLocale'

export const usePokemonLocaleName = (pokemon) => {
  const locale = useLocale()
  return pokemon.names[locale] ? pokemon.names[locale] : pokemon.names.en
}
