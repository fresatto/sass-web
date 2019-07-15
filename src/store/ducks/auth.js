import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

export const { Types, Creators } = createActions({
	signInRequest: ['email', 'password'],
	signInSuccess: ['username'],
	signInFailure: ['error'],
})

export const AuthTypes = Types

/* Initial State */

export const INITIAL_STATE = Immutable({
	signedIn: false,
	token: null,
	loading: false,
})

/* Reducers */

export const signInRequest = state => state.merge({ loading: true })
export const signInSuccess = state => state.merge({ loading: false })
export const signInFailure = state => state.merge({ loading: false })

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.SIGN_IN_REQUEST]: signInRequest,
	[Types.SIGN_IN_SUCCESS]: signInSuccess,
	[Types.SIGN_IN_FAILURE]: signInFailure,
})
