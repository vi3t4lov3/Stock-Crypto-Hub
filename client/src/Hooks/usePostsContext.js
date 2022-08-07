import { useContext } from 'react'
import { PostsContext } from '../Context/PostContext'

export const usePostsContext = () => {
  const context = useContext(PostsContext)

  if (!context) {
    throw Error('usePostsContext must be used inside an PostsContextProvider')
  }

  return context
}