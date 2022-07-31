import React from 'react'

const Test = () => {
    const name = "Tu Nguyen";
    const loading = true;
    const showName = false;
  return (
    <div>
        {/* <h1>Testing</h1> */}
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name : "World"}</h1>  }

    </div>
  )
}

export default Test