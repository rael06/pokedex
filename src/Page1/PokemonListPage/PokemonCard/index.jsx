import PokemonType from 'common/components/PokemonType'
import React from 'react'
import padder from 'common/utils/padder'
import styles from './style.module.css'
import PureLink from 'common/components/PureLink'
// import pokeball from './pokeball.png'

export default function PokemonCard({ id, name, image, types }) {
  // const [imageSource, setImageSource] = React.useState(pokeball)

  // React.useEffect(() => setImageSource(image), [image])

  return (
    <PureLink
      to={`/pokemon/${id}`}
      children={
        <div className={styles.wrapper}>
          <p className={styles.id}>No.{padder('0', 3, id)}</p>
          <p className={styles.name}>{name}</p>
          <img className={styles.image} alt="pic" src={image} />
          <div className={styles.types}>
            {types.map((type) => (
              <div key={id + name + type} className={styles.type}>
                <PokemonType type={type} />
              </div>
            ))}
          </div>
        </div>
      }
    ></PureLink>
  )
}
