import React from 'react'
// import Calendar from '../Calendar/Calendar'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostContainer.css'
const PostContainer = () => {
  return (
    <div className="PostContainer">
        {/* <Calendar /> */}
        <PostShare />
        <Posts />
    </div>
  )
}

export default PostContainer