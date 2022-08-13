import React from 'react';
import Alerts from '../Alerts/Alerts';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import WatchLists from '../WatchLists/WatchLists';
import './PostContainer.css';
const PostContainer = () => {
	return (
		<div className='PostContainer'>
			<Alerts />
			<PostShare />
			<Posts />
			{/* <WatchLists /> */}
		</div>
	);
};

export default PostContainer;
