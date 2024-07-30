import React from 'react'

//CSS
import './Post.css'

//React router Dom
import { useParams } from 'react-router-dom'

//Import de posts
import posts from '../../json/posts.json'
import PostModel from '../../components/PostModel'

//React markdown
import ReactMarkdown from 'react-markdown'

const Post = () => {

    const params = useParams()

    const post = posts.find((post) => {
        if (post.id === Number(params.id)) {
            return post
        }
    })

    console.log(post)

    return (
        <PostModel
            photoCape={`/assets/posts/${post.id}/capa.png`}
            title={post.titulo}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModel>
    )
}

export default Post