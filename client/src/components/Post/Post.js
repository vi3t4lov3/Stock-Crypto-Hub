import React from 'react'
import './Post.css'
import { Button } from 'semantic-ui-react'


const Post = ({data}) => {
  return (
    <div className="Post">
       <div className="detail">
            <span> {data.desc}</span>
        </div>
        <img src={data.img} alt="" />
        <div className="postReact">
          {data.liked ?  
            <Button
              color='red'
              icon='heart'
              size='mini'
              label={{ basic: true, color: 'red', pointing: 'left', content: data.likes}}
            />    :  
            <Button
            content='Like'
            size='mini'
            icon='heart'
            label={{ basic: true, pointing: 'left', content: data.likes}}
          />}
          <Button
            content='Comment'
            size='mini'
            icon='comment outline'
            label={{ basic: true, pointing: 'left', content: data.likes}}
          />
          <Button
            content='Share'
            size='mini'
            icon='share alternate'

          />
          <Button 
            disabled 
            size='mini'>{data.date}</Button>
        </div>
    </div>
  )
}

export default Post