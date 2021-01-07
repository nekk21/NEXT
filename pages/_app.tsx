import '../styles/globals.css'
import { Provider } from 'react-redux'
import React from 'react'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNprogress
				color='red'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}
const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
