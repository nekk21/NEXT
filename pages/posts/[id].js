import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../store/actions/postActions'

function post({ post }) {
	const router = useRouter()
	const dispatch = useDispatch()

	const deleteHandler = () => {
		const confirm = window.confirm(
			`Are u sure? You want to delete  - ${post.title}?`
		)
		if (confirm) {
			dispatch(deletePost(post.id))
			router.push('/')
		}
	}
	return (
		<div>
			<h1>{post.title} </h1>
			<p>{post.body} </p>
			<button onClick={deleteHandler}>DELETE POST</button>
		</div>
	)
}

export async function getServerSideProps({ params }) {
	const response = await fetch(
		`https://simple-blog-api.crew.red/posts/${params.id}`
	)
	const post = await response.json()

	return {
		props: { post }, // will be passed to the page component as props
	}
}

export default post
