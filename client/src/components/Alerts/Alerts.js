import React from 'react';
import './Alerts.css';
import Alert from '../Alert/Alert';
import { useAuthContext } from '../../Hooks/useAuthContext';
import useFetch from '../../Hooks/FetchData';

const Alerts = () => {
	const { user } = useAuthContext();
	const { data: earning, setEarning, error } = useFetch('/api/cal');
	// console.log(Earning);
	return (
		<div className='Earning'>
			{error && <div> {error} </div>}
			{earning && <Alert data={earning} />}
		</div>
	);
};

export default Alerts;
