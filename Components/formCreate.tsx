import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledFrom = styled.div`
	.box {
		position: absolute;
		left: 50%;
		top: 35%;
		transform: translate(-50%, -50%);
		border: 1px solid;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border-radius: 3px;
		padding: 70px 100px;
	}
	.input-container {
		position: relative;
		margin-bottom: 25px;
	}
	.input-container label {
		position: absolute;
		top: 0px;
		left: 0px;
		font-size: 16px;
		color: black;
		pointer-event: none;
		transition: all 0.5s ease-in-out;
	}
	.input-container input {
		border: 0;
		border-bottom: 1px solid #555;
		background: transparent;
		width: 100%;
		padding: 8px 0 5px 0;
		font-size: 16px;
		color: black;
	}
	.input-container input:focus {
		border: none;
		outline: none;
		border-bottom: 1px solid #e74c3c;
	}

	.input-container input:focus ~ label,
	.input-container input:valid ~ label {
		top: -12px;
		font-size: 12px;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
	}
	.area {
		margin: 0px;
		width: 578px;
		height: 167px;
		resize: none;
	}
	.grey {
		background-color: gray;
	}
`

function formCreate(props: any) {
	const router = useRouter()

	const backHandler = () => {
		router.push('/')
	}

	return (
		<StyledFrom>
			<form onSubmit={props.handleSubmit}>
				<div className='box'>
					<div className='input-container'>
						<Field
							name='title'
							component='input'
							id='icon_prefix'
							type='text'
							required=''
						/>
						<label>Title</label>
					</div>

					<div className='input-container'>
						<Field
							className='area'
							name='body'
							component='textarea'
							id='icon_prefix2'
							type='textarea'
							required=''
							placeholder='Type your post'
						/>
					</div>

					<div className='buttons'>
						<button
							className='btn grey'
							onClick={backHandler}
							type='submit'>
							Cancel
						</button>
						<button className='btn' type='submit'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</StyledFrom>
	)
}

const CreateFormRedux = reduxForm({ form: 'CreateForm' })(formCreate)
export default CreateFormRedux
