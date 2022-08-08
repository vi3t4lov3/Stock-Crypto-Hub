import {useState, useEffect} from 'react'

//custome hooks state
const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect (() => {
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Can not connect the api')
        }
        return res.json();
      })
      .then(data => {
        setData(data)
        // console.log(data)
      })
      .catch(err => { 
        // console.log(err.message)
        setError(err.message)
      }) 
    }, [url]);
    return { data,setData, error}
}

export default FetchData