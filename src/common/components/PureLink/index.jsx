import React from 'react'
import styles from './style.module.css'

import { Link } from 'react-router-dom'

const PureLink = ({ children, ...props }) => {
  return (
    <Link className={styles.wrapper} {...props}>
      {children}
    </Link>
  )
}

export default PureLink
