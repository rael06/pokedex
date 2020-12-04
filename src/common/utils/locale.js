import React from "react";
import LocaleContext from "../contexts/LocaleContext";

const { locale } = React.useContext(LocaleContext)

export const getPokemonName = (pokemon) =>
  pokemon.names[locale] ? pokemon.names[locale] : pokemon.names.en