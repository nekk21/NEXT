import Head from 'next/head'
import styled from 'styled-components'
import Post from '../Components/Post'
import Link from 'next/link'
import { useEffect } from 'react'

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
		width: 5rem;
		height: 3rem;
		align-self: flex-end;
	}
`

function Home({ posts }) {
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
					<h1> My posts </h1>
					<button>
						<Link href='/createPost'>ADD NEW POST</Link>
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

Home.getInitialProps = async ctx => {
	const response = await fetch('https://simple-blog-api.crew.red/posts')
	const posts = await response.json()

	return {
		posts, // will be passed to the page component as props
	}
}

export default Home
