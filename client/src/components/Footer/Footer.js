import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import './Footer.css'
import Cover from "../../assets/img/profileImg.jpg"
const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="footer-container">
            <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    You added to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover}/>
                <Feed.Content>
                    <Feed.Date content='3 days ago' />
                    <Feed.Summary>
                    You added as a friend.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='4 days ago' />
                    <Feed.Summary>
                    You added  to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </div>

        <div className="footer-container">
            <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    You added to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover}/>
                <Feed.Content>
                    <Feed.Date content='3 days ago' />
                    <Feed.Summary>
                    You added as a friend.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='4 days ago' />
                    <Feed.Summary>
                    You added  to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </div>


        <div className="footer-container">
            <Card.Content>
            <Card.Header>Popular Activity</Card.Header>
            </Card.Content>
            <Card.Content>
            <Feed>
                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='1 day ago' />
                    <Feed.Summary>
                    You added to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover}/>
                <Feed.Content>
                    <Feed.Date content='3 days ago' />
                    <Feed.Summary>
                    You added as a friend.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                <Feed.Label image={Cover} />
                <Feed.Content>
                    <Feed.Date content='4 days ago' />
                    <Feed.Summary>
                    You added  to your group.
                    </Feed.Summary>
                </Feed.Content>
                </Feed.Event>
            </Feed>
            </Card.Content>
        </div>
    </div>
    <div className="footer-copy">
        <p className="ui center">Copyright &copy; 2022 By TuNguyen</p>
    </div>
</>
  )
}

export default Footer