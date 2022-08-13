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
		const response = await fetch('/api/alert/' + eventId + '/bullcount', {
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
		const response = await fetch('/api/alert/' + eventId + '/neutralCount', {
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
		const response = await fetch('/api/alert/' + eventId + '/bearcount', {
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
							<Table.HeaderCell>Current</Table.HeaderCell>
							<Table.HeaderCell>Alert</Table.HeaderCell>
							<Table.HeaderCell>Entry</Table.HeaderCell>
							<Table.HeaderCell>Stoploss</Table.HeaderCell>
							<Table.HeaderCell>Target</Table.HeaderCell>
							<Table.HeaderCell>Date</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
							<Table.HeaderCell>AlertBy</Table.HeaderCell>
							{/* <Table.HeaderCell>Bull/Bear</Table.HeaderCell> */}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{data.map((newData) => (
							<>
								<Table.Row key={newData._id}>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.ticker}</a>}
											/>
									</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>0000</a>}
											/>
									</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.alert_command}</a>}
											/>
									</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.entry}</a>}
											/>
									</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.stoploss}</a>}
											/>
									</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.target}</a>}
											/>
									</Table.Cell>
									<Table.Cell>
										{moment(newData.createdAt).calendar()}
									</Table.Cell>
									<Table.Cell>{newData.status}</Table.Cell>
									<Table.Cell>
											<Popup
												content={newData.note}
												trigger={<a>{newData.username}</a>}
											/>
									</Table.Cell>
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
