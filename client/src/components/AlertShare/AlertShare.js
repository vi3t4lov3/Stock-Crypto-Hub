import React, { useState, useRef } from 'react';
import Profile from '../../assets/img/profileImg.jpg';
import './AlertShare.css';
import { Icon, Button } from 'semantic-ui-react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const AlertShare = () => {
	const { user } = useAuthContext();
	const [ticker, setTicker] = useState();
	const [optionTrade, SetOptionTrade] = useState();
	const [sharesTrade, setSharesTrade] = useState();
	const [alertCommand, setAlertCommand] = useState();
	const [entry, setEntry] = useState();
	const [stopLoss, setStopLoss] = useState();
	const [target, setTarget] = useState();
	const [closedPrice, setClosedPrice] = useState();
	const [note, setNote] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		if (!user) {
			setError('You must be logged in');
			return;
		}
		e.preventDefault();
		// console.log(user.user._id);
		const response = await fetch('/api/alert', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				userId: user.user._id,
				username: user.user.username,
				ticker: ticker,
				alert_command: sharesTrade,
				entry: entry,
				stoploss: stopLoss,
				target: target,
				note: note,
			}),
		});
		const json = await response.json();
		console.log(json);
		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			// save the user to local storage
			// localStorage.setItem('user', JSON.stringify(json))
			window.location.href = '/';
		}
	};
	return (
		<>
			{user && (
				<div className='AlertShare'>
					<img src={Profile} alt='' />
					<div className='earningPost'>
						<input
							type='text'
							placeholder='Ticker'
							onChange={(e) => setTicker(e.target.value)}
							value={ticker}
							required
						/>
						<select onChange={(e) => setSharesTrade(e.target.value)}>
  <option value="none">test</option>
  <option value={sharesTrade}>LONG</option>
  <option value={sharesTrade}>SHORT</option>
</select>
						{/* <select className="" 
							type="text" required="">
							<option value="none" selected disabled hidden>LONG/SHORT TRADE</option>
							<option value={sharesTrade} onChange={(e) => setSharesTrade(e.target.value)}>LONG </option>
							<option value={sharesTrade} onChange={(e) => setSharesTrade(e.target.value)}>SHORT</option>
						</select> */}
						{/* <input
							type='text'
							placeholder='Command CALL/PUT LONG/SHORT'
							onChange={(e) => setAlertCommand(e.target.value)}
							value={alertCommand}
						/> */}
						<label>test</label>
						<input
							type='text'
							placeholder='Entry Price'
							onChange={(e) => setEntry(e.target.value)}
							value={entry}
						/>
						<input
							type='text'
							placeholder='Stoploss price'
							onChange={(e) => setStopLoss(e.target.value)}
							value={stopLoss}
						/>
						<input
							type='text'
							placeholder='Target'
							onChange={(e) => setTarget(e.target.value)}
							value={target}
						/>

						<textarea
							type='text'
							placeholder='Analyst'
							onChange={(e) => setNote(e.target.value)}
							value={note}
						/>

						<div className='postOption'>
							<Button
								encType='multipart/form_data'
								className='share-button'
								style={{ color: 'var(--blue)' }}
								onClick={handleSubmit}
							>
								Add Alert
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AlertShare;
