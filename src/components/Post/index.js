import React from 'react'

//Import do CSS
import styles from './Post.module.css'

const Post = ({post}) => {
  return (
    <div className={styles.post}>
        <img
            className={styles.cape}
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do post"
        />
        <h2 className={styles.title}>
            {post.titulo}
        </h2>
        <button className={styles.buttonRead}>Ler</button>

    </div>
  )
}

export default Post