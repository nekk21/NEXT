import CreateFormRedux from '../Components/formCreate'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { createPostFetch } from '../store/actions/postActions'

function createPost() {
	const router = useRouter()
	const dispatch = useDispatch()

	const submit = (formData: any) => {
		dispatch(createPostFetch(formData))
		router.push('/')
	}

	return (
		<>
			<CreateFormRedux onSubmit={submit} />
		</>
	)
}

export default createPost
