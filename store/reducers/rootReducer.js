import { combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
	post: postReducer,
	form: formReducer,
})
