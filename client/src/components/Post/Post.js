import React from 'react'
import {Link} from 'react-router-dom'
import './Post.css'
import { Button } from 'semantic-ui-react'
import moment from 'moment';
moment().format();

const Post = ({posts, handleDelete}) => {
  
  return ( 
    <>
    {posts.map((post) => (
    <div className="Post">
      
       <div className="detail" key={post._id}>
        <h3>{post.title} </h3>
        <p> {post.body}</p>
        {post.url && 
        <p>Click <Link to={post.url}>here </Link>to view{post.url}</p>
        }
        </div>
        <img src={post.image ?  "/uploads/" + post.image : "" }
        alt="" />
        <div className="postReact">
          {post.like> 0 ?  
            <Button
              color='red'
              icon='heart'
              size='mini'
              label={{ basic: true, color: 'red', pointing: 'left', content: post.likes }}
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
            label={{ basic: true, pointing: 'left', content: post.comment}}
          />
          <Button
            content='Share'
            size='mini'
            icon='share alternate'

          />
          <Button 
            disabled 
            size='mini'>{ moment(post.createdAt).format('MM/DD/YYYY')}</Button>
            <Button
            content='Readed'
            size='mini'
            icon='book'
            
            onClick={() => handleDelete(post._id)}
          />
        </div>
        </div>
        ))} 
    </>

  )
}

export default Post