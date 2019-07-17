import { call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
// Utils
import api from '../../services/api.js'

// Alert toast
import { actions as toastrActions } from 'react-redux-toastr'

// Creators
import { Creators as AuthActions } from '../ducks/auth'

export function* signInRequestSaga(action) {
	try {
		const { email, password } = action
		const { data } = yield call(api.post, '/session', {
			email,
			password,
		})

		localStorage.setItem('@Omni:token', data.token)

		yield put(AuthActions.signInSuccess(data.token))
		yield put(push('/'))
	} catch (error) {
		yield put(AuthActions.signInFailure(''))
		yield put(
			toastrActions.add({
				title: 'Erro ao acessar',
				message: 'Verifique o e-mail ou a senha e tente novamente',
				type: 'error',
				attention: true,
			})
		)
	}
}
