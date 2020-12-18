import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import { Dialog, DialogContent, DialogActions, Button } from '@material-ui/core'
import { firstCharUppercase } from 'common/utils/strings'
import { getLocaleName } from 'common/utils/locale'

const PokemonDetails = ({ favourites, toggleFavourite }) => {
  const { locale } = useLocale()
  const history = useHistory()
  const { id } = useParams()
  const [open, setOpen] = React.useState(!!id)

  if (!id.match(/[0-9]+/)) return null

  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))

  const handleClose = () => {
    setOpen(false)
    history.push('/pokemons')
  }

  return (
    pokemon && (
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent dividers>
          <div className={styles.dialogContentWrapper}>
            <PokemonCard
              toggleFavourite={toggleFavourite}
              isFavourite={favourites.includes(pokemon.id)}
              pokemon={pokemon}
            />
            <div className={styles.moves}>
              {pokemon.moves.sort().map((m) => (
                <div key={m} className={styles.move}>
                  {firstCharUppercase(m)}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="contained" color="primary">
            {getLocaleName(translations['goBack'], locale)}
          </Button>
        </DialogActions>
      </Dialog>
    )
  )
}

export default PokemonDetails
