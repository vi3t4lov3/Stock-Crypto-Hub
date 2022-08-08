import { useState } from 'react'
import { usePostsContext } from './usePostsContext'

// import axios from "axios"
export const usePost = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = usePostsContext()

    const createPost = async (userId, body,title, image) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {'content-type': 'multipart/form-data'},
      body: JSON.stringify({ userId, body, title, image })
    })
    // console.log(response);
    const postData = await response.json()
// console.log(postData);
    if (!response.ok) {
      setIsLoading(false)
      setError(postData.error)
    }
    if (response.ok) {
      // save the user to local storage
    //   localStorage.setItem('post', JSON.stringify(postData))
      window.location.href = "/";

      // update the auth context
      dispatch({type: 'CREATE_POST', payload: postData})

      // update loading state
      setIsLoading(false)
    }
  }

  return { createPost, isLoading, error }
}