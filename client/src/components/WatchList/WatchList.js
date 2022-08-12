import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import './WatchList.css';
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react';
import moment from 'moment';
moment().format();
const WatchList = ({ data }) => {
	const { user } = useAuthContext();
	const [userBullCount, setUserBullCount] = useState({});
	const [userBearCount, setUserBearCount] = useState({});
	useEffect(() => {
		const localUserBullCount = {};
		for (const userData of data) {
			localUserBullCount[userData._id] = userData.bullCount;
		}
		setUserBullCount(localUserBullCount);

		const localUserBearCount = {};
		for (const userData of data) {
			localUserBearCount[userData._id] = userData.bearCount;
		}
		setUserBearCount(localUserBearCount);
	}, [user]);

	const bullHandler = async (eventId) => {
		// console.log(posts);
		if (!user) {
			return;
		}
		const response = await fetch('/api/wl/' + eventId + '/bullcount', {
			method: 'PUT',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			// dispatch({ type: 'POST_LIKE', payload: json });
			// setUserBearCount((prevState) => ({
			// 	...prevState,
			// 	[eventId]: prevState[eventId],
			// }));
			window.location.href = '/';
		}
		console.error('error');
	};

	const neutralHandler = async (eventId) => {
		// console.log(posts);
		if (!user) {
			return;
		}
		const response = await fetch('/api/wl/' + eventId + '/neutralCount', {
			method: 'PUT',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			// dispatch({ type: 'POST_LIKE', payload: json });
			// setUserBearCount((prevState) => ({
			// 	...prevState,
			// 	[eventId]: prevState[eventId],
			// }));
			window.location.href = '/';
		}
		console.error('error');
	};

	const bearHandler = async (eventId) => {
		// console.log(posts);
		if (!user) {
			return;
		}
		const response = await fetch('/api/wl/' + eventId + '/bearcount', {
			method: 'PUT',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			// dispatch({ type: 'POST_LIKE', payload: json });
			// setUserBearCount((prevState) => ({
			// 	...prevState,
			// 	[eventId]: prevState[eventId],
			// }));
			window.location.href = '/';
		}
		console.error('error');
	};
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
							<div className='ui three buttons'>
								<Button
									as='div'
									labelPosition='right'
									onClick={() => bullHandler(newData._id)}
								>
									<Button color='green'>
										<Icon name='arrow circle up' />
										Bull {newData.bullCount.length}
									</Button>
								</Button>
								<Button
									as='div'
									labelPosition='right'
									onClick={() => neutralHandler(newData._id)}
								>
									<Button color='gray'>
										<Icon name='arrow circle down' />
										Neutral {newData.neutralCount.length}
									</Button>
								</Button>
								<Button
									as='div'
									labelPosition='right'
									onClick={() => bearHandler(newData._id)}
								>
									<Button color='red'>
										<Icon name='arrow circle down' />
										Bear {newData.bearCount.length}
									</Button>
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
