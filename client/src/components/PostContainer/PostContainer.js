import React from 'react'
// import Calendar from '../Calendar/Calendar'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import WatchLists from '../WatchLists/WatchLists'
import './PostContainer.css'
const PostContainer = () => {
  return (
    <div className="PostContainer">
        {/* <Calendar /> */}
        <PostShare />
        <Posts />
        <WatchLists />
        
    </div>
  )
}

export default PostContainer