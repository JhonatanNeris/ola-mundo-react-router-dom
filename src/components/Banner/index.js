import React from 'react'

//Import do CSS
import styles from './Banner.module.css'

//Images
import circle from '../../assets/circulo_colorido.png'
import myPhoto from '../../assets/imgPhoto.jpg'
import myPhoto2 from '../../assets/minha_foto.png'


const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>
          Olá, Mundo!

        </h1>
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço! Eu me chamho Jhonatan Souza, estudande full-stack. Esse é um projeto utulizando React-Router espero que gostem.

        </p>
      </div>
      <div className={styles.images}>
        <img src={circle} alt="Círculo" className={styles.circle} aria-hidden={true}/>
        <img src={myPhoto} alt="Foto pessoal" className={styles.myPhoto} />

      </div>

    </div>
  )
}

export default Banner