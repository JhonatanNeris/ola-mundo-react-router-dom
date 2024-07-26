import React from 'react'

//Import components
import Banner from '../../components/Banner'
import Post from '../../components/Post'

//Import CSS
import styles from './Home.module.css'

import posts from '../../json/posts.json'

const Home = () => {
  return ( 
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}

      </ul>    
  )
}

export default Home