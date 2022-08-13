import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileContainer from '../ProfileContainer/ProfileContainer';
import './Profile.css';

const Profile = () => {
	return (
		<div className='Profile'>
			<ProfileCard />
			<ProfileContainer />
		</div>
	);
};

export default Profile;
