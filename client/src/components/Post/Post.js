import React from 'react'
import {usePostsContext} from '../../Hooks/usePostsContext'
import {useAuthContext} from '../../Hooks/useAuthContext'
import {Link} from 'react-router-dom'
import './Post.css'
import { Button } from 'semantic-ui-react'
import moment from 'moment';
moment().format();

const Post = ({posts, hiddenPost}) => {
  const { user } = useAuthContext()
  const { post } = usePostsContext()
  const handleDelete = async () => {
    if (!user) {
      return
    }
    const response = await fetch('/api/posts/' + posts._id , {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.user.token}`
      }
    })
    const json = await response.json()
console.log(json);
    if (response.ok) {
      console.log('deleted');
      // posts.filter((p) => p._id !== posts._id)
      
      // dispatch({type: 'DELETE_POSTT', payload: json})
    }
    console.log('loi')
  }
  return ( 
    <>
    {posts.map((post) => (
    <div className="Post" key={post._id}>
      
       <div className="detail">
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
            onClick={() => hiddenPost(post._id)}
          />
            <Button key={post._id}
            // content='Delete'
            size='mini'
            icon='delete'
            
            onClick={() => handleDelete(post._id)}
          />
        </div>
        </div>
        ))} 
    </>

  )
}

export default Post