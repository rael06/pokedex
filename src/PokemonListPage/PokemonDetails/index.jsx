import React from 'react'
import styles from './style.module.css'
import PokemonCard from 'PokemonListPage/PokemonCard'
import pokemonList from 'common/models/pokemons.json'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import PureLink from 'common/components/PureLink'
import useLocale from 'common/hooks/useLocale'
import translations from 'translations.json'
import { Dialog, DialogContent, DialogActions, Button } from '@material-ui/core'
import { firstCharUppercase } from 'common/utils/strings'
import { getLocaleName } from 'common/utils/locale'

const PokemonDetails = () => {
  const { locale } = useLocale()
  const { id } = useParams()
  const history = useHistory()
  const pokemon = pokemonList.find((pokemon) => pokemon.id === Number(id))

  const [open, setOpen] = React.useState(!!id)

  const handleClose = () => {
    setOpen(false)
    history.push('/pokemons')
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogContent dividers>
        <div className={styles.dialogContentWrapper}>
          <PokemonCard pokemon={pokemon} />
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
        <PureLink to="/pokemons">
          <Button autoFocus variant="contained" color="primary">
            {getLocaleName(translations['goBack'], locale)}
          </Button>
        </PureLink>
      </DialogActions>
    </Dialog>
  )
}

export default PokemonDetails
