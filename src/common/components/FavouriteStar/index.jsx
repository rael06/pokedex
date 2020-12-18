import { IconButton, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 16,
    padding: '4px 8px',
    color: theme.palette.primary.main,
  },
}))

function FavouriteStar({ isFavourite, onClick }) {
  const classes = useStyles()

  return (
    <IconButton className={classes.root} onClick={onClick}>
      {isFavourite ? '★' : '☆'}
    </IconButton>
  )
}

export default FavouriteStar
