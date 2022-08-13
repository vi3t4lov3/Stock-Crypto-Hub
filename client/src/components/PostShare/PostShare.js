import React, { useState, useRef } from 'react';
import Profile from '../../assets/img/profileImg.jpg';
import './PostShare.css';
import { Icon, Button, Modal } from 'semantic-ui-react';
import { useAuthContext } from '../../Hooks/useAuthContext';
import { usePostsContext } from '../../Hooks/usePostsContext';
// import {usePost} from '../../Hooks/usePost'
import axios from 'axios';
import moment from 'moment';
import WatchListModal from '../Modal/WatchLishModal';
import EarningsModal from '../Modal/EarningModal';
import AlertModal from '../Modal/AlertModal';
moment().format();

const PostShare = () => {
	const { user } = useAuthContext();
	// const { dispatch } = usePostsContext();
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const [image, setImage] = useState(null);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState();
	const [source, setSource] = useState(false);
	const imageRef = useRef();
	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			let img = e.target.files[0];
			setImage(img);
		}
	};
	const urlHandler = () => {
		setSource(true);
	};
	const handleSubmit = async (e) => {
		if (user) {
			e.preventDefault();

			const formData = new FormData();

			formData.append('username', user.user.username);
			formData.append('userId', user.user._id);
			formData.append('body', body);
			formData.append('title', title);

			if (source) {
				formData.append('url', url);
			} else if (image) {
				const newImageName =
					moment().format('MMMM-Do-YYYY-MM-HH-MM-DD-YY-h-a-') + image.name;
				formData.append('image', image);
				formData.append('image', newImageName);
			}
			await axios
				.post('/api/posts', formData, {
					headers: {
						'content-type': 'multipart/form-data',
					},
				})
				.then((res) => {
					// const json = res.json();
					// console.log(res.data);
					setTitle(url);
					setTitle(title);
					setBody(body);
					setImage(null);
					// dispatch({ type: 'CREATE_POST', payload: res.data });
					window.location.href = '/';
				})
				.catch((err) => {
					setError(err);
					console.log(err);
				});
		}
	};
	return (
		<>
			{user && (
				<div className='PostShare'>
					<img src={user.user.avatarPicture} alt='' />
					<div>
						<input
							type='text'
							placeholder='Title'
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							required
						/>
						<textarea
							type='text'
							placeholder='Shares your thought...'
							onChange={(e) => setBody(e.target.value)}
							value={body}
							required
						/>
						{source && (
							<input
								type='text'
								placeholder='Youtube link'
								onChange={(e) => setUrl(e.target.value)}
								value={url}
								required
							/>
						)}
						<div className='postOption'>
							<div className='otpion' onClick={() => imageRef.current.click()}>
								<Icon
									name='images'
									size='big'
									style={{ color: 'var(--photo)' }}
								/>
								Photo
							</div>
							<div className='otpion' onClick={urlHandler}>
								<Icon
									name='youtube'
									size='big'
									style={{ color: 'var(--source)' }}
								/>
								Video
							</div>

							<div className='otpion'>
								<AlertModal />
							</div>
							<div className='otpion'>
								<WatchListModal />
							</div>
							<div className='otpion'>
								<EarningsModal />
							</div>
							<Button
								encType='multipart/form-data'
								className='share-button'
								style={{ color: 'var(--blue)' }}
								onClick={handleSubmit}
							>
								<Icon name='share' />
								Share
							</Button>
							{error && <div className='error'>{error}</div>}
							{/* hidden the chooise file input */}
							<div style={{ display: 'none' }}>
								<input
									type='file'
									filename='image'
									name='image'
									ref={imageRef}
									onChange={onImageChange}
								/>
							</div>
						</div>
						{image && (
							<div className='previewImage'>
								<Icon
									className='icon'
									name='close'
									size='big'
									style={{ color: 'var(--blue)' }}
									onClick={() => setImage(null)}
								/>
								<img src={URL.createObjectURL(image)} alt='' />
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default PostShare;
