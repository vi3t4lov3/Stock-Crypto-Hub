import React from 'react'
import './News.css'
import New from '../New/New'
import { useAuthContext } from '../../Hooks/useAuthContext'
import useFetch from '../../Hooks/FetchData'

const News = () => {
  const  TOKEN = "";
  // ipm4f2ovsqkvbnxxzrkyqmq6tqsubdmcuy4cxpzf
  // console.log(TOKEN);
  const {user} = useAuthContext()
  const url = `https://stocknewsapi.com/api/v1/category?section=general&items=10&page=1&token=${TOKEN}`
  const {data: news, setNews, error} = useFetch(`${url}`)
// console.log(news);
  return (
    <div className="News">
       {error && <div> {error} </div> }
      {news && <New data={news}/>}
    </div>
  )
}

export default News