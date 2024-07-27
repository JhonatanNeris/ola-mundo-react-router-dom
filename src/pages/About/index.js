import React from 'react'

//Import dos components
import PostModel from '../../components/PostModel'

//Imagens
import photoCape from '../../assets/sobre_mim_capa.png'
import aboutMePhoto from "../../assets/imgPhoto.jpg"

//CSS
import styles from './About.module.css'

const About = () => {
  return (
    <PostModel photoCape={photoCape} title="Sobre mim">
      <h3 className={styles.subtitle}>
        Olá, eu sou o Jhonatan!
      </h3>
      <img
        src={aboutMePhoto}
        alt="Foto do Jhonatan Souza sorrindo"
        className={styles.aboutMePhoto}
      />

      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error architecto, animi debitis cupiditate dolore rerum qui alias doloremque dignissimos nam vero omnis soluta, voluptatem ullam ipsa sequi, excepturi harum.</p>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error architecto, animi debitis cupiditate dolore rerum qui alias doloremque dignissimos nam vero omnis soluta, voluptatem ullam ipsa sequi, excepturi harum.</p>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error architecto, animi debitis cupiditate dolore rerum qui alias doloremque dignissimos nam vero omnis soluta, voluptatem ullam ipsa sequi, excepturi harum.</p>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error architecto, animi debitis cupiditate dolore rerum qui alias doloremque dignissimos nam vero omnis soluta, voluptatem ullam ipsa sequi, excepturi harum.</p>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error architecto, animi debitis cupiditate dolore rerum qui alias doloremque dignissimos nam vero omnis soluta, voluptatem ullam ipsa sequi, excepturi harum.</p>

    </PostModel>
  )
}

export default About