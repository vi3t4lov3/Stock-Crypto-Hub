import React from 'react';
import './Alerts.css';
import Alert from '../Alert/Alert';
import { useAuthContext } from '../../Hooks/useAuthContext';
import useFetch from '../../Hooks/FetchData';

const Alerts = () => {
	const { user } = useAuthContext();
	const { data: alert, setAlert, error } = useFetch('/api/alert');
	// console.log(Earning);
	return (
		<div className='Alerts'>
			{error && <div> {error} </div>}
			{alert && <Alert data={alert} />}
		</div>
	);
};

export default Alerts;
