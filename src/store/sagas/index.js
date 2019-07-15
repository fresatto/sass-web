import { all, takeLatest } from 'redux-saga/effects'

// Sagas
import { signInRequestSaga } from './auth'

// Types
import { Types as AuthTypes } from '../ducks/auth'

export default function* rootSaga() {
	return yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequestSaga)])
}
