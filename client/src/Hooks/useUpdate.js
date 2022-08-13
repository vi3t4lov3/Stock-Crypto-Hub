import { useState } from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';
export const useUpdate = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const { user } = useAuthContext();
	const userUpdate = async (
		firstname,
		lastname,
		phone,
		about,
		worksAt,
		livesin
	) => {
		setIsLoading(true);
		setError(null);

		const response = await fetch('/api/user/' + user.user._id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				firstname,
				lastname,
				phone,
				about,
				worksAt,
				livesin,
			}),
		});
		const userData = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(userData.error);
		}
		if (response.ok) {
			// save the user to local storage
			localStorage.setItem('user', JSON.stringify(userData));
			// window.location.href = '/';

			// update the auth context
			dispatch({ type: 'UPDATE', payload: userData });

			// update loading state
			setIsLoading(false);
		}
	};

	return { userUpdate, isLoading, error };
};
