import { all, takeLatest } from 'redux-saga/effects'

import { signInRequestSaga } from './auth'
import { Types as AuthTypes } from '../ducks/auth'

import { getTeams } from './teams'
import { TeamsTypes } from '../ducks/teams'

export default function* rootSaga() {
	return yield all([
		takeLatest(AuthTypes.SIGN_IN_REQUEST, signInRequestSaga),
		takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
	])
}
