import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const register = async (firstname, lastname, email,  username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ firstname, lastname, email,  username, password})
    })
    const userData = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(userData.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(userData))
      window.location.href = "/";

      // update the auth context
      dispatch({type: 'REGISTER', payload: userData})

      // update loading state
      setIsLoading(false)
    }
  }

  return { register, isLoading, error }
}