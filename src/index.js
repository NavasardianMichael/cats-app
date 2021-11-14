import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { rootReducer } from './store/rootReducer'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)
window.state = store.getState()
render(app, document.getElementById('root'))