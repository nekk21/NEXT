import * as types from '../types'

const initialState = {
	posts: [],
	post: {},
	error: null,
}

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_POSTS:
			return {
				...state,
				posts: action.payload,
			}
		case types.GET_INFO_ABOUT_POST:
			return {
				...state,
				post: action.payload,
			}

		default:
			return state
	}
}
