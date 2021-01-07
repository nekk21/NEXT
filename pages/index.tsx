import Head from 'next/head'
import styled from 'styled-components'
import Post from '../Components/Post'
import { myPost } from '../interfaces/post'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'

const StyleHome = styled.div`
	display: flex;
	flex-wrap: wrap;

	align-items: flex-end;
	position: relative;

	justify-content: space-between;

	.nameAndButton {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	button {
		cursor: pointer;
		align-self: flex-end;
	}
	.pageTitle {
		cursor: pointer;
		user-select: none;
	}
`
interface propInterface {
	posts: myPost[]
}

function Home({ posts }: propInterface) {
	const router = useRouter()

	const [posters, setPosters] = useState([])

	const handleLink = () => {
		router.push('/createPost')
	}
	const handleMain = () => {
		router.push('/')
		router.reload()
	}

	return (
		<StyleHome>
			<div>
				<Head>
					<title>NEXT | BLOG</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
			</div>
			<div className='wrapper'>
				<div className='nameAndButton'>
					<h1 className={'pageTitle'} onClick={handleMain}>
						My posts
					</h1>
					<button className='btn' onClick={handleLink}>
						ADD NEW POST
					</button>
				</div>
				<div>
					{posts.map(item => {
						if (item.title && item.body) {
							return (
								<Post
									key={item.id}
									title={item.title}
									body={item.body}
									id={item.id}
								/>
							)
						}
					})}
				</div>
			</div>
		</StyleHome>
	)
}

export async function getServerSideProps(ctx: NextPageContext) {
	// Fetch data from external API
	const response = await axios.get('https://simple-blog-api.crew.red/posts')
	const posts: myPost[] = response.data

	// Pass data to the page via props
	return { props: { posts } }
}

export default Home
