import React from 'react';
import ListContainer from '../ListContainer/ListContainer';
import PostContainer from '../PostContainer/PostContainer';
import './HomePage.css'


const HomePage = () => {
    
  return (
    <div className="HomePage">
        <ListContainer />
        <PostContainer />
    </div>
  )
}

export default HomePage