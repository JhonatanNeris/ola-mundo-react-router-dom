import React from 'react'

//Import do CSS
import styles from './PostCard.module.css'

//React Router Dom
import { Link } from 'react-router-dom'
import DefaultButton from '../DefaultButton'

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cape}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.title}>
          {post.titulo}
        </h2>
        <DefaultButton>Ler</DefaultButton>

      </div>
    </Link>


  )
}

export default PostCard