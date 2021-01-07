import React from 'react'
import { Field, reduxForm } from 'redux-form'

function formCreate(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div className='input-field'>
					<Field
						name='title'
						component='input'
						id='icon_prefix'
						type='text'
					/>
					<label htmlFor='icon_prefix'>Title</label>
				</div>
				<div className='input-field col s6'>
					<Field
						name='body'
						component='input'
						id='icon_prefix2'
						type='text'
					/>
					<label htmlFor='icon_prefix'>body</label>
				</div>

				<div className='buttons'>
					<button
						type='submit'
						className='submit btn waves-effect waves-light #43a047 green darken-1'>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

const CreateFormRedux = reduxForm({ form: 'CreateForm' })(formCreate)
export default CreateFormRedux
