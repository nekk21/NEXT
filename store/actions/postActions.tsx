import axios from 'axios'
import { myPost } from '../../interfaces/post'

export const deletePost = (id: string | number) => {
	return async (dispatch: any) => {
		const response = await axios.delete(
			`https://simple-blog-api.crew.red/posts/${id}`
		)
		const data = response.data
	}
}

export const createPostFetch = (formData: myPost) => {
	return async (dispatch: any) => {
		const response = await fetch(`https://simple-blog-api.crew.red/posts`, {
			method: 'POST',
			body: JSON.stringify(formData),

			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
	}
}
