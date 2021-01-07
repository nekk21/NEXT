import '../styles/globals.css'
import { Provider } from 'react-redux'
import React from 'react'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}
const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
