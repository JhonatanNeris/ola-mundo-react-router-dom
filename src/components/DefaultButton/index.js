import React, { Children } from 'react'

//CSS
import styles from './DefaultButton.module.css'

const DefaultButton = ({children, size}) => {
  return (
    <button className={`${styles.button} ${size === "lg" ? styles.lg : ""}`}>
        {children}
    </button>
  )
}

export default DefaultButton