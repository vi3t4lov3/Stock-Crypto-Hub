import React from 'react'
import './Post.css'
import { Icon, } from 'semantic-ui-react'


const Post = ({data}) => {
  return (
    <div className="Post">
      <h1>{data.name}</h1>
        <img src={data.img} alt="" />


        <div className="postReact">
          <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>
          {data.liked ? <Icon name='heart' size='large' style={{ color: "var(--blue)" }}/> : <Icon name='heart outline' size='large'/>}
          <Icon name='comment outline' size='large'/>
          <Icon name='share alternate' size='large'/>

        </div>


        

        <div className="detail">
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post