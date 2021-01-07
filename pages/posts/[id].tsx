import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { myPost } from '../../interfaces/post'
import { deletePost } from '../../store/actions/postActions'
import styled from 'styled-components'
import axios from 'axios'

const StyledPostPage = styled.div`
	position: relative;
	justify-content: space-around;
	text-align: center;
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-radius: 15px;
	margin: 50px auto;
	width: 50vw;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	padding: 40px;

	.buttons {
		width: 5rem;
		margin-top: 20px;
		justify-content: space-between;
		display: flex;
		width: 100%;
	}
	.grey {
		background-color: grey;
	}
`

interface PostPage {
	post: myPost
}

function Post({ post }: PostPage) {
	const router = useRouter()
	const dispatch = useDispatch()

	const deleteHandler = () => {
		const confirm = (window as any).confirm(
			`Are u sure? You want to delete  - ${post.title}?`
		)
		if (confirm) {
			dispatch(deletePost(post.id))
			router.push('/')
		}
	}

	const backHandler = () => {
		router.push('/')
	}
	return (
		<StyledPostPage>
			<h1>{post.title} </h1>
			<p>{post.body} </p>
			<div className='buttons'>
				<button className='grey' onClick={backHandler}>
					BACK TO POSTS
				</button>

				<button onClick={deleteHandler}>DELETE POST</button>
			</div>
		</StyledPostPage>
	)
}

interface PageContext extends NextPageContext {
	query: {
		id: string
	}
}

export async function getServerSideProps({ query }: PageContext) {
	const response = await axios.get(
		`https://simple-blog-api.crew.red/posts/${query.id}`
	)
	const post = response.data

	return {
		props: { post }, // will be passed to the page component as props
	}
}

export default Post
