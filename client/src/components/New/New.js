import React from 'react'
import './New.css'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';
moment().format();

const New = ({data}) => {
  const _ = url => {
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
    <Card.Content key={newData.date}>

    
    
      <Feed>
        <Feed.Event> 
        
          {/* <Feed.Label image={newData.image_url} /> */}
          <Feed.Content>
          <h4>{newData.title}</h4>
          <Feed.Date content={ moment(newData.date).format('MMMM Do YYYY, h:mm:ss a')} />
          <Card.Description>
         {newData.text} <a href={newData.news_url} target="_blank" rel="noopener noreferrer">...read more</a>
        </Card.Description>

            
            {/* <Link to={newData.news_url}>...read more</Link> */}
            <Feed.Summary>
              Source by <b>{newData.source_name}</b>.
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