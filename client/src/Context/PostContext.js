import React, { createContext, useReducer, useEffect } from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';
export const PostsContext = createContext();

export const postsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_POST':
			return {
				posts: action.payload,
			};
		case 'CREATE_POST':
			return {
				posts: [action.payload, ...state.posts],
			};
		case 'POST_LIKE':
			return {
				posts: [action.payload, ...state.posts],
			};
		case 'POST_COMMENT':
			return {
				posts: [action.payload, ...state.posts],
			};
		case 'DELETE_POST':
			return {
				posts: state.posts.filter((p) => p._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const PostsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postsReducer, {
		posts: null,
	});
	const { user } = useAuthContext();
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch('/api/posts', {
				headers: { Authorization: `Bearer ${user.token}` },
			});
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: 'SET_POST', payload: json });
			}
		};

		if (user) {
			fetchPosts();
		}
	}, [dispatch, user]);
	console.log('PostContext state:', state);
	return (
		<PostsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PostsContext.Provider>
	);
};
