import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const title= 'Tu Nguyen'
const GithubFinder = () => {
  return (
    <div className="GithubFinder">
        <Navbar title={title}/>
        <Footer />
    </div>
  )
}

export default GithubFinder


// import React, { Component } from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// export default class GithubFinder extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar title='Tu Nguyen'/>
//         <Footer />
//       </div>
//     )
//   }
// }

