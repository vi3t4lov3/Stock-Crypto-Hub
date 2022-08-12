import React from 'react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import './Alert.css';
import { Table, Popup, Button } from 'semantic-ui-react';
import moment from 'moment';
moment().format();
const Alert = ({ data }) => {
	const { user } = useAuthContext();
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
			<div className='Alert'>
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
										{moment(newData.AlertDate).format('MM/DD/YY')}
										<br />
										<p style={{ fontSize: '9px' }}>@{newData.username}</p>
									</Table.Cell>
									<Table.Cell>{newData.estimatedMove}%</Table.Cell>
									<Table.Cell>{newData.lastMove}%</Table.Cell>
									{/* <Table.Cell>{newData.lastMove}</Table.Cell> */}
								</Table.Row>
								<Table.Row key={newData._id}>
									<Table.Cell>
										<Button
											size='mini'
											onClick={() => bullHandler(newData._id)}
										>
											Bull {newData.bullCount.length}
										</Button>
									</Table.Cell>
									<Table.Cell>
										<Button
											size='mini'
											onClick={() => neutralHandler(newData._id)}
										>
											Neu {newData.neutralCount.length}
										</Button>
									</Table.Cell>
									<Table.Cell>
										<Button
											size='mini'
											onClick={() => bearHandler(newData._id)}
										>
											Bear {newData.bearCount.length}
										</Button>
									</Table.Cell>
									<Table.Cell></Table.Cell>
									{/* <Table.Cell>{newData.lastMove}</Table.Cell> */}
								</Table.Row>
							</>
						))}
					</Table.Body>
				</Table>
			</div>
		</>
	);
};

export default Alert;
