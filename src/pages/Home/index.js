import React from 'react'

//Import components
import Banner from '../../components/Banner'
import PostCard from '../../components/PostCard'

//Import CSS
import styles from './Home.module.css'

import posts from '../../json/posts.json'

const Home = () => {
  return ( 
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post}/>
          </li>
        ))}

      </ul>    
  )
}

export default Home