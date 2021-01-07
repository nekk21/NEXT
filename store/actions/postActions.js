export const deletePost = id => {
	return async dispatch => {
		const response = await fetch(
			`https://simple-blog-api.crew.red/posts/${id}`,
			{
				method: 'DELETE',
			}
		)
		const data = await response.json()
	}
}

export const createPostFetch = formData => {
	return async dispatch => {
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
