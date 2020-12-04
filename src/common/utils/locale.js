export const getLocaleName = (object, locale) => (object[locale] ? object[locale] : object.en)

export const translations = {
  goBack: {
    en: 'Go back',
    fr: 'Retour',
    it: 'Torna indietro',
    de: 'Zurück',
    es: 'Regresa',
  },
  pokemonSearchBarPlaceholder: {
    en: 'Enter the name of a Pokemon',
    fr: "Entrez le nom d'un pokemon",
    it: 'Inserisci il nome di un Pokemon',
    de: 'Geben Sie den Namen eines Pokemons ein',
    es: 'Ingrese el nombre de un Pokemon',
  },
}
