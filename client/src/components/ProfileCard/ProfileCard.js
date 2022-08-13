import React from 'react';
import EditProfileModal from '../Modal/EditProfileModal';
import { useAuthContext } from '../../Hooks/useAuthContext';
import './ProfileCard.css';
const ProfileCard = () => {
	const ProfilePage = true;
	const { user } = useAuthContext();
	return (
		// {user && (<>
		// 	</>)}
		<div className='ProfileCard'>
			<div className='ProfileImages'>
				<img src={user.user.profileImage} alt='' />
				<img src={user.user.avatarPicture} alt='' />
			</div>

			<div className='ProfileName'>
				<span>
					{user.user.firstname} {user.user.lastname}
				</span>
			</div>
			<div className='followStatus'>
				<hr />
				<div>
					<div className='follow'>
						<span>{user.user.following.length}</span>
						<span>Followings</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>{user.user.followers.length}</span>
						<span>Followers</span>
					</div>
				</div>
				<hr />
			</div>
			{ProfilePage ? '' : <span>My Profile</span>}
			<div className='ProfileMe'>
				<h2 className='text-end'>{user.user.about}</h2>
				<h5>Work At: {user.user.worksAt}</h5>
				<div className='row g-4'>
					<div className='col-md'>
						<h2 className='text-center mb-4'>Contact Info</h2>
						<ul className='list-group list-group-flush lead'>
							<li className='list-group-item'>
								<span className='fw-bold'>Address</span> {user.user.livesin}
							</li>
							<li className='list-group-item'>
								<span className='fw-bold'>
									<i className='bi bi-telephone-fill'></i> Phone:
								</span>{' '}
								{user.user.phone}
							</li>
							<li className='list-group-item'>
								<span className='fw-bold'>
									<i className='bi bi-envelope-fill'></i> Email:
								</span>{' '}
								{user.user.email}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<EditProfileModal />
		</div>
	);
};

export default ProfileCard;
