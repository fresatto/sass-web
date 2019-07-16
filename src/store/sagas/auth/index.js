import { call, put } from 'redux-saga/effects'
import api from '../../../services/api.js'

// Alert toast
import { actions as toastrActions } from 'react-redux-toastr'

// Creators
import { Creators as AuthActions } from '../../ducks/auth'

export function* signInRequestSaga(action) {
	try {
		const { data } = yield call(api.post, '/session', {
			...action.payload,
		})

		localStorage.setItem('@Omni:token')

		yield put(AuthActions.signInSuccess(data.token))
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
