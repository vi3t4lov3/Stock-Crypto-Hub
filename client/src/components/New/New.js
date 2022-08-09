import React from 'react'
import {Link} from 'react-router-dom'
import './New.css'
import { Card, Feed } from 'semantic-ui-react'


const New = ({data}) => {
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
  <>
  <div className="New">
    <div>
      <center><h1>Breaking News</h1></center>
    </div>
      {data.data.map((newData) => (
    <Card.Content>

    
    
      <Feed>
        <Feed.Event> 
        
          {/* <Feed.Label image={newData.image_url} /> */}
          <Feed.Content>
          <h4>{newData.title}</h4>
          <Feed.Date content={newData.date} />
          <Card.Description>
         {newData.text} <a href={newData.news_url} target="_blank" rel="noopener noreferrer">...read more</a>
        </Card.Description>

            
            {/* <Link to={newData.news_url}>...read more</Link> */}
            <Feed.Summary>
              Source by <a>{newData.source_name}</a>.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>

    
    ))}
      </div>
    </>
  )
}

export default New 