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
	const [optionAlert, setOptionAlert] = useState(false);
	const [sharesAlert, setSharesAlert] = useState(false);
	const [sharesTrade, setSharesTrade] = useState();
	const [entry, setEntry] = useState();
	const [strikes, setStrikes] = useState();
	const [expiryDate, setExpiryDate] = useState(new Date());
	const [stopLoss, setStopLoss] = useState();
	const [target, setTarget] = useState();
	const [closedPrice, setClosedPrice] = useState();
	const [chart, setChart] = useState('');
	const [analyst, setAnalyst] = useState('');
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
				strikes: strikes,
				expiry_date: expiryDate,
				stoploss: stopLoss,
				target: target,
				chart: chart,
				analyst: analyst,
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
						<label>
							<input
								type='checkbox'
								checked={false}
								value={sharesAlert}
								onChange={() => {
									setSharesAlert(true);
									setOptionAlert(false);
								}}
							/>
							SHARES ALERT
						</label>
						<label>
							<input
								type='checkbox'
								checked={false}
								value={optionAlert}
								onChange={() => {
									setOptionAlert(true);
									setSharesAlert(false);
								}}
							/>
							OPTION ALERT
						</label>
						{optionAlert && (
							<select onChange={(e) => setSharesTrade(e.target.value)}>
								<option value=''>PLEASE SELECT ONE</option>
								<option value={sharesTrade}>BUY CALL</option>
								<option value={sharesTrade}>BUY PUT</option>
								<option value={sharesTrade}>BUY DEPIT CALL</option>
								<option value={sharesTrade}>DEPIT PUT</option>
								<option value={sharesTrade}>CREDIT CALL</option>
								<option value={sharesTrade}>CREDIT PUT</option>
							</select>
						)}
						<input
							type='text'
							placeholder='Ticker'
							onChange={(e) => setTicker(e.target.value)}
							value={ticker}
							required
						/>
						{sharesAlert && (
							<>
								<select onChange={(e) => setSharesTrade(e.target.value)}>
									<option value='none'>PLEASE SELECT ONE</option>
									<option value={sharesTrade}>LONG</option>
									<option value={sharesTrade}>SHORT</option>
								</select>
								<input
									type='text'
									placeholder='Entry Price'
									onChange={(e) => setEntry(e.target.value)}
									value={entry}
								/>
							</>
						)}

						{optionAlert && (
							<>
								<input
									type='text'
									placeholder='Option Price'
									onChange={(e) => setEntry(e.target.value)}
									value={entry}
								/>
								<input
									type='text'
									placeholder='Option Strike'
									onChange={(e) => setStrikes(e.target.value)}
									value={strikes}
								/>
								<div className='datepick'>
									<option value=''>Expiry Date</option>
									<DatePicker
										className='datepicker'
										selected={expiryDate}
										onChange={(expiryDate) => setExpiryDate(setExpiryDate)}
									/>
								</div>
							</>
						)}
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
						<input
							type='text'
							placeholder='URL Chart if available'
							onChange={(e) => setChart(e.target.value)}
							value={chart}
						/>

						<textarea
							type='text'
							placeholder='Analyst'
							onChange={(e) => setAnalyst(e.target.value)}
							value={analyst}
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
