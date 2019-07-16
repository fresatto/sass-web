import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'

import store from './store'
import GlobalStyle from './styles/global'

import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const App = () => (
	<Provider store={store}>
		<Fragment>
			<GlobalStyle />
			<Routes />
			<ReduxToastr
				timeOut={4000}
				preventDuplicates
				position="top-left"
				transitionIn="fadeIn"
				transitionOut="fadeOut"
				progressBar
				closeOnToastrClick
			/>
		</Fragment>
	</Provider>
)

export default App
