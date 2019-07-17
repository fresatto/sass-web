import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import reactotron from '../config/ReactotronConfig'
import reducers from './ducks'
import rootSagas from './sagas'
import history from '../routes/history'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, routerMiddleware(history)]

const store = createStore(
	reducers(history),
	compose(
		applyMiddleware(...middlewares),
		reactotron.createEnhancer()
	)
)

sagaMiddleware.run(rootSagas)

export default store
