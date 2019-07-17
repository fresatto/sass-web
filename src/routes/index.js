import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router-dom'

// import { Container } from './styles';

import history from './history'

// Pages
import SignIn from '../pages/Auth/SignIn'
import SignUp from '../pages/Auth/SignUp'
import Main from '../pages/Main'

// Rotas
import PrivateRoute from './private'
import Guest from './guest'

const Routes = () => (
	<ConnectedRouter history={history}>
		<Switch>
			<Guest path="/signin" component={SignIn} />
			<Guest path="/signup" component={SignUp} />
			<PrivateRoute path="/" component={Main} />
		</Switch>
	</ConnectedRouter>
)

export default Routes
