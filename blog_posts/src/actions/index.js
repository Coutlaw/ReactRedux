import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	// the posts will be added to state when the action is dispatched
	const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'));
	uniqUserIds.forEach(userId => dispatch(fetchUser(userId)));
	// no await is needed because we don't need to do anything with the result
}

const fetchPosts = () => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({ type: 'FETCH_POSTS', payload: response.data });
	};
};

// fetch single user
export const fetchUser = (id) => {
	return async (dispatch) => {
		const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({ type: 'FETCH_USER', payload: response.data });
	};
};
