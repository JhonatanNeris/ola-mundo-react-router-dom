import React from 'react'

//CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p><span>&#174;</span> Design by alura</p>
        <p>Desenvolvido por Jhonatan Neris</p>
    </footer>
  )
}

export default Footer