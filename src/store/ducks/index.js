import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as toastr } from 'react-redux-toastr'
import { reducer as auth } from './auth'
import { reducer as teams } from './teams'

const reducers = history =>
	combineReducers({
		auth,
		toastr,
		teams,
		router: connectRouter(history),
	})

export default reducers
