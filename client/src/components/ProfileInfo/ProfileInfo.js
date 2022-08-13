import React, { useState } from 'react';
import { useUpdate } from '../../Hooks/useUpdate';
import { useAuthContext } from '../../Hooks/useAuthContext';
function ProfileInfo() {
	const { user } = useAuthContext();
	// const [isRegister, setIsRegister] = useState(false);
	// const [confirmPass, setConfirmPass] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [username, setUserName] = useState('');
	// const [password, setPassword] = useState('');
	// const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [about, setAbout] = useState('');
	const [worksAt, setWorksAt] = useState('');
	const [livesin, setLivesin] = useState('');

	const { userUpdate, error, isLoading } = useUpdate();
	const handleSubmit = async (e) => {
		// setConfirmPass(false);
		e.preventDefault();
		await userUpdate(firstname, lastname, phone, about, worksAt, livesin);
	};
	const resetForm = () => {
		setFirstName(firstname);
		setLastName(lastname);
		// setUserName(username);
		// setEmail(email);
		setPhone(phone);
		setAbout(about);
		setWorksAt(worksAt);
		setLivesin(livesin);
	};

	return (
		<div className='ProfileInfo'>
			<form className='infoForm'>
				<h3>Update Your info</h3>

				<div>
					<input
						type='text'
						className='infoInput'
						name='FirstName'
						value={firstname}
						placeholder={user.user.firstname}
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<input
						type='text'
						className='infoInput'
						name='LastName'
						placeholder={user.user.lastname}
						value={lastname}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div>
					<textarea
						type='text'
						className='infoInput'
						name='About'
						placeholder='About me'
						value={about}
						onChange={(e) => setAbout(e.target.value)}
					/>
				</div>

				<div>
					<input
						type='text'
						className='infoInput'
						name='livesIN'
						placeholder='LIves in'
						value={livesin}
						onChange={(e) => setLivesin(e.target.value)}
					/>
					<input
						type='text'
						className='infoInput'
						name='worksAT'
						placeholder='Works at'
						value={worksAt}
						onChange={(e) => setWorksAt(e.target.value)}
					/>
				</div>

				<div>
					<input
						type='number'
						className='infoInput'
						placeholder='Phone number'
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>

				{/* <div>
					Profile Image
					<input type='file' name='profileImg' />
					Cover Image
					<input type='file' name='coverImg' />
				</div> */}

				<button className='button infoButton' onClick={handleSubmit}>
					Update
				</button>
			</form>
		</div>
	);
}

export default ProfileInfo;
