import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import './WatchList.css';
import { Button, Card, Image, List } from 'semantic-ui-react';
import moment from 'moment';

moment().format();
const WatchList = ({ data }) => {
	const { user } = useAuthContext();
	const [userCount, setUserCount] = useState({});

	useEffect(() => {
		const localUserCount = {};
		for (const userData of data) {
			localUserCount[userData._id] = userData.bullCount;
		}
		setUserCount(localUserCount);
	}, [user]);

	const bullHandler = async (eventId) => {
		if (!user) {
			return;
		}
		await fetch('/api/wl/' + eventId + '/bullcount', {
			method: 'GET',
		}).then((_) => {
			setUserCount((prevState) => ({
				...prevState,
				[eventId]: prevState[eventId] + 1,
			}));
		});
	};
	const bearHandler = () => {};
	return (
		<>
			<div className='Watchlist'>
				<center>
					<h1>Watchlist</h1>
				</center>
				{data.map((newData) => (
					<div className='container-list' key={newData._id}>
						<Card.Content>
							<Image
								floated='right'
								size='mini'
								//  src={user.user.profilePicture}
							/>
							<Card.Header>{newData.ticker}</Card.Header>
							<Card.Meta>@{newData.username}</Card.Meta>
							<Card.Description>
								<strong>
									<u>Analysts: </u>
									{newData.analysts}
								</strong>
							</Card.Description>
							<Image
								src={newData.chart}
								as='a'
								size='huge'
								href={newData.chart}
								target='_blank'
							/>
							<Card.Group>
								<Card fluid color='blue' header={newData.resistance} />
								<Card fluid color='green' header={newData.call} />
								<Card fluid color='yellow' header={newData.support} />
								<Card fluid color='red' header={newData.put} />
							</Card.Group>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button
									basic
									color='green'
									onClick={(_) => bullHandler(newData._id)}
								>
									Bull {userCount[newData._id]}
								</Button>
								<Button basic color='red'>
									Bear
								</Button>
							</div>
						</Card.Content>
					</div>
				))}
			</div>
		</>
	);
};

export default WatchList;
