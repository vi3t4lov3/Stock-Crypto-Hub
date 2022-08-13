import React, { useState } from 'react';
import { usePostsContext } from '../../Hooks/usePostsContext';
import { useAuthContext } from '../../Hooks/useAuthContext';
import { Link } from 'react-router-dom';
import './Post.css';
import { Button, Comment, Icon, Form } from 'semantic-ui-react';
import moment from 'moment';
import YouTube from 'react-youtube';
// import CommentShare from '../CommentShare/CommentShare';
moment().format();

const Post = ({ post, hiddenPost }) => {
	const { user } = useAuthContext();
	const { dispatch } = usePostsContext();
	const [commentBody, setCommentBody] = useState();
	const [showComment, setShowComment] = useState(false);
	const [error, setError] = useState(null);

	// handle delete post
	const handleDelete = async (eventId) => {
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
	//hangle when click like button
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

	// handle comment when clicked
	const handleComment = async (eventId) => {
		// console.log(eventId);
		if (!user) {
			setError('You must be logged in');
			return;
		}
		// fetch the api to add the comment
		const response = await fetch('/api/posts/' + eventId + '/comment', {
			method: 'PUT',
			body: JSON.stringify({
				userId: user.user._id,
				username: user.user.username,
				postId: eventId,
				comment_body: commentBody,
			}),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();
		// console.log(json);
		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			// console.log('work');
			dispatch({ type: 'POST_COMMENT', payload: json });
			// save the user to local storage
			// localStorage.setItem('user', JSON.stringify(json))
			window.location.href = '/';
		}
	};
	return (
		<>
			{post && (
				<div className='Post' key={post._id}>
					<div className='detail'>
						<h3>{post.title} </h3>
						<p> {post.body}</p>
						{post.url && (
							<>
								<center>
									<YouTube videoId={post.url} />
								</center>
							</>
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
							onClick={() => setShowComment(!showComment)}
							content='Comment'
							size='mini'
							icon='comment outline'
							label={{
								basic: true,
								pointing: 'left',
								content: post.comment.length,
							}}
						/>
						<Button content='Share' size='mini' icon='share alternate' />
						<Button disabled size='mini'>
							{moment(post.createdAt).format('MM/DD/YYYY')}
						</Button>
						<Button
							content='Hide'
							size='mini'
							icon='hide'
							onClick={() => hiddenPost(post._id)}
						/>
						{user && user.user._id === post.userId && (
							<Button
								// content='Delete'
								size='mini'
								icon='delete'
								onClick={() => handleDelete(post._id)}
							/>
						)}
					</div>
					{user && showComment && (
						<>
							<Comment.Group>
								{post.comment.map((data) => (
									<Comment>
										<Comment.Avatar as='a' src={user.user.avatarPicture} />
										<Comment.Content>
											<Comment.Author>{data.username}</Comment.Author>
											<Comment.Metadata>
												<div>{moment(data.createdAt).calendar()}</div>
											</Comment.Metadata>
											<Comment.Text>{data.comment_body}.</Comment.Text>
										</Comment.Content>
									</Comment>
								))}
								<Form reply>
									<Form.TextArea
										type='text'
										placeholder='your comment here'
										onChange={(event) => setCommentBody(event.target.value)}
										value={commentBody}
									/>
									<Button
										onClick={() => handleComment(post._id)}
										content='Add Comment'
										labelPosition='left'
										icon='edit'
										primary
									/>
								</Form>
							</Comment.Group>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default Post;
