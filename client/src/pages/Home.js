import React from 'react';
import ListContainer from '../components/ListContainer/ListContainer';
import PostContainer from '../components/PostContainer/PostContainer';
import '../index.css'


const Home = () => {
    
  return (
    <div className="Home">
        <ListContainer />
        <PostContainer />
    </div>
  )
}

export default Home