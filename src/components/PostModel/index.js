import React from 'react'

//Import do CSS
import styles from './PostModel.module.css'

const PostModel = ({children, title, photoCape}) => {
  return (
    <article className={styles.postModelContainer}>
      <div className={styles.photoCape} style={{backgroundImage: `url(${photoCape})`}} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  )
}

export default PostModel