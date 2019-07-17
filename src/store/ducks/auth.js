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
	signedIn: !!localStorage.getItem('@Omni:token'),
	token: localStorage.getItem('@Omni:token') || null,
	loading: false,
})

/* Reducers */

export const signInRequest = state => state.merge({ loading: true })
export const signInSuccess = state =>
	state.merge({ loading: false, signedIn: true })
export const signInFailure = state => state.merge({ loading: false })

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.SIGN_IN_REQUEST]: signInRequest,
	[Types.SIGN_IN_SUCCESS]: signInSuccess,
	[Types.SIGN_IN_FAILURE]: signInFailure,
})
