import React from 'react'
import './Posts.css'

import Post from '../Post/Post'
import { useAuthContext } from '../../Hooks/useAuthContext'
// import {usePostsContext} from '../../Hooks/usePostsContext'
import useFetch from '../../Hooks/FetchData'

const Posts = () => {
  const {user} = useAuthContext()
  const {data: posts, setData, error} = useFetch('/api/posts')
    const hiddenPost = (id) => {
      const newData = posts.filter(post => post._id !== id)
      setData(newData);
    };
    
    const handleDelete = async (id) => {
      if (!user) {
        return
      }
      const response = await fetch('http://localhost:4000/api/posts/' + posts._id , {
        method: 'DELETE',
        // headers: {
        //   'Authorization': `Bearer ${user.user.token}`
        // }
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
    <div className="Posts">
       {error && <div> {error} </div> }
      {posts && <Post posts={posts}  hiddenPost={hiddenPost} handleDelete={handleDelete} />}
    </div>
  )
}

export default Posts