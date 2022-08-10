import React from 'react'
import './WatchLists.css'
import WatchList from '../WatchList/WatchList'
import { useAuthContext } from '../../Hooks/useAuthContext'
import useFetch from '../../Hooks/FetchData'

const WatchLists = () => {
  const {user} = useAuthContext()
  const {data: watchlist, setWatchlist, error} = useFetch('/api/wl')
// console.log(Earning);
  return (
    <div className="WatchLists">
       {error && <div> {error} </div> }
      {watchlist && <WatchList data={watchlist}/>}
    </div>
  )
}

export default WatchLists