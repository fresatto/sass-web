import { createStore, applyMiddleware, compose } from 'redux'
import reactotron from '../config/ReactotronConfig'
import createSagaMiddleware from 'redux-saga'

import reducers from './ducks'
import rootSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
	reducers,
	compose(
		applyMiddleware(...middlewares),
		reactotron.createEnhancer()
	)
)

sagaMiddleware.run(rootSagas)

export default store
