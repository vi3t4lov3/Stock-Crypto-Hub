import React from 'react';
import './Posts.css';

import Post from '../Post/Post';
import { useAuthContext } from '../../Hooks/useAuthContext';
import { usePostsContext } from '../../Hooks/usePostsContext';
import useFetch from '../../Hooks/FetchData';

const Posts = () => {
	const { user } = useAuthContext();
	const { dispatch } = usePostsContext();
	const { data: posts, setData, error } = useFetch('/api/posts');
	const hiddenPost = (id) => {
		const newData = posts.filter((post) => post._id !== id);
		setData(newData);
	};

	return (
		<div className='Posts'>
			{error && <div> {error} </div>}
			{posts && <Post posts={posts} hiddenPost={hiddenPost} />}
		</div>
	);
};

export default Posts;
