import React from 'react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import './Earning.css';
import { Table, Popup, Button } from 'semantic-ui-react';
import moment from 'moment';
moment().format();
const Earning = ({ data }) => {
	const { user } = useAuthContext();
	// handle delete post
	const handleDelete = async (eventId) => {
		if (!user) {
			console.log('loging please');
		}
		const response = await fetch('/api/cal/' + eventId, {
			method: 'DELETE',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			// dispatch({ type: 'DELETE_POST', payload: json });
			window.location.href = '/';
		}
		console.error('error');
	};

	const bullHandler = async (eventId) => {
		// console.log(posts);
		if (!user) {
			return;
		}
		const response = await fetch('/api/cal/' + eventId + '/bullcount', {
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
		const response = await fetch('/api/cal/' + eventId + '/neutralCount', {
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
		const response = await fetch('/api/cal/' + eventId + '/bearcount', {
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
			<div className='Earning'>
				<center>
					<h1>E/R Schedule</h1>
				</center>
				<Table>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Ticker</Table.HeaderCell>
							<Table.HeaderCell>Date</Table.HeaderCell>
							<Table.HeaderCell>EST. ER</Table.HeaderCell>
							<Table.HeaderCell>Last ER</Table.HeaderCell>
							{user && (
								<>
									<Table.HeaderCell>
										<center>Your Thought</center>
									</Table.HeaderCell>
								</>
							)}
							{/* <Table.HeaderCell>Bull/Bear</Table.HeaderCell> */}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{data.map((newData) => (
							<>
								<Table.Row key={newData._id}>
									<Table.Cell>
										<center>
											<Popup
												content={newData.note}
												trigger={<a>{newData.ticker}</a>}
											/>
										</center>
									</Table.Cell>
									<Table.Cell>
										{moment(newData.earningDate).format('MM/DD/YY')}
										<br />
										<p style={{ fontSize: '9px' }}>@{newData.username}</p>
									</Table.Cell>
									<Table.Cell>{newData.estimatedMove}%</Table.Cell>
									<Table.Cell>{newData.lastMove}%</Table.Cell>
									{user && (
										<>
											<Table.Cell>
												<div className='earning-button'>
													<Button
														size='mini'
														color='green'
														onClick={() => bullHandler(newData._id)}
													>
														{newData.bullCount.length}
													</Button>
													<Button
														size='mini'
														color='gray'
														onClick={() => neutralHandler(newData._id)}
													>
														{newData.neutralCount.length}
													</Button>
													<Button
														size='mini'
														color='red'
														onClick={() => bearHandler(newData._id)}
													>
														{newData.bearCount.length}
													</Button>
													{user && user.user._id === newData.userId && (
														<Button
															size='mini'
															color='green'
															onClick={() => handleDelete(newData._id)}
														>
															x
														</Button>
													)}
												</div>
											</Table.Cell>
										</>
									)}
								</Table.Row>
							</>
						))}
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default Earning;
