import React from 'react'
import './Post.css'
import { Button } from 'semantic-ui-react'


const Post = ({posts}) => {
  return ( 
    <>
    {posts.map((post) => (
    <div className="Post">
      
       <div className="detail">
        <h3>{post.title}</h3>
        <p> {post.body} {post.image}</p>
        </div>
        <img src={post.image ?  "/uploads/" + post.image : "" }
        alt="" />
        <div className="postReact">
          {post.liked ?  
            <Button
              color='red'
              icon='heart'
              size='mini'
              label={{ basic: true, color: 'red', pointing: 'left', content: post.likes}}
            />    :  
            <Button
            content='Like'
            size='mini'
            icon='heart'
            label={{ basic: true, pointing: 'left', content: post.likes}}
          />}
          <Button
            content='Comment'
            size='mini'
            icon='comment outline'
            label={{ basic: true, pointing: 'left', content: post.likes}}
          />
          <Button
            content='Share'
            size='mini'
            icon='share alternate'

          />
          <Button 
            disabled 
            size='mini'>{posts.date}</Button>
        </div>
        </div>
        ))} 
    </>

  )
}

export default Post