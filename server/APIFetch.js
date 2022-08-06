import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    //fetch the api from backend
    const register = async (firstname, lastname, username, password, email) => {
        console.log('test')
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstname, lastname, email,  username, password })
        })
console.log(response);
        const userData = await response.json()

        console.log(userData)

        if (!response.ok) {
            setIsLoading(false)
            setError(userData.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(userData))

            // update the auth context
            dispatch({type: 'LOGIN', payload: userData})

            // update loading state
            setIsLoading(false)
            }
    }
    return {register, isLoading, error}

}
