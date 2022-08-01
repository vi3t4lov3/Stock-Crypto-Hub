import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostContainer.css'
const PostContainer = () => {
  return (
    <div className="PostContainer">
        <PostShare />
        <Posts />
    </div>
  )
}

export default PostContainer