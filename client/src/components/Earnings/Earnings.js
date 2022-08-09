import React from 'react'
import './Earnings.css'
import Earning from '../Earning/Earning'
import { useAuthContext } from '../../Hooks/useAuthContext'
import useFetch from '../../Hooks/FetchData'

const Earnings = () => {
  const {user} = useAuthContext()
  const {data: earning, setEarning, error} = useFetch('/api/cal')
// console.log(Earning);
  return (
    <div className="Earning">
       {error && <div> {error} </div> }
      {earning && <Earning data={earning}/>}
    </div>
  )
}

export default Earnings