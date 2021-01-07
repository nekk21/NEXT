import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledElement = styled.div`
	position: relative;
	justify-content: space-around;
	text-align: center;
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-radius: 20px;
	margin: 50px auto;
	width: 50vw;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	cursor: pointer;
`

function Post(props) {
	return (
		<StyledElement>
			<Link href={`posts/${props.id}`}>
				<div className='linkWrap'>
					<h1>{props.title}</h1>
					<p>{props.body}</p>
				</div>
			</Link>
		</StyledElement>
	)
}

export default Post
