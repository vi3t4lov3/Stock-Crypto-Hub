import React from 'react';
import { usePostsContext } from '../../Hooks/usePostsContext';
import { useAuthContext } from '../../Hooks/useAuthContext';
import { Link } from 'react-router-dom';
import './Post.css';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
moment().format();

const Post = ({ posts, hiddenPost }) => {
	const { user } = useAuthContext();
	const { dispatch } = usePostsContext();
	const handleDelete = async (eventId) => {
		// console.log(posts);
		if (!user) {
			console.log('loging please');
		}
		const response = await fetch('/api/posts/' + eventId, {
			method: 'DELETE',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_POST', payload: json });
			window.location.href = '/';
		}
		console.error('error');
	};

	const handleLikes = async (eventId) => {
		// console.log(posts);
		if (!user) {
			return;
		}
		const response = await fetch('/api/posts/' + eventId + '/like', {
			method: 'PUT',
			body: JSON.stringify({ userId: user.user._id }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'POST_LIKE', payload: json });
			window.location.href = '/';
		}
		console.error('error');
	};
	return (
		<>
			{posts.map((post) => (
				<div className='Post' key={post._id}>
					<div className='detail'>
						<h3>{post.title} </h3>
						<p> {post.body}</p>
						{post.url && (
							<p>
								Click <Link to={post.url}>here </Link>to view{post.url}
							</p>
						)}
					</div>
					<img src={post.image ? '/uploads/' + post.image : ''} alt='' />
					<div className='postReact'>
						{post.likes.length > 0 ? (
							<Button
								onClick={() => handleLikes(post._id)}
								color='red'
								icon='heart'
								size='mini'
								label={{
									basic: true,
									color: 'red',
									pointing: 'left',
									content: post.likes.length,
								}}
							/>
						) : (
							<Button
								onClick={() => handleLikes(post._id)}
								content='Like'
								color='green'
								size='mini'
								icon='heart'
								label={{
									basic: true,
									pointing: 'left',
									content: post.likes.length,
								}}
							/>
						)}
						<Button
							content='Comment'
							size='mini'
							icon='comment outline'
							label={{ basic: true, pointing: 'left', content: 'testing' }}
						/>
						<Button content='Share' size='mini' icon='share alternate' />
						<Button disabled size='mini'>
							{moment(post.createdAt).format('MM/DD/YYYY')}
						</Button>
						<Button
							content='Readed'
							size='mini'
							icon='book'
							onClick={() => hiddenPost(post._id)}
						/>
						{/* {post.userId != user.user._id && ( */}
						<Button
							// content='Delete'
							size='mini'
							icon='delete'
							onClick={() => handleDelete(post._id)}
						/>
						{/* )} */}
					</div>
				</div>
			))}
		</>
	);
};

export default Post;
