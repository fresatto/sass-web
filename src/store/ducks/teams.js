import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* Types & Action Creators */

const { Types, Creators } = createActions({
	getTeamsRequest: null,
	getTeamsSuccess: ['data'],
	setActiveTeam: ['team'],
	openTeamsModal: null,
	closeTeamsModal: null,
})

export const TeamsTypes = Types
export default Creators

/* Initial State */

export const INITIAL_STATE = Immutable({
	data: [],
	active: JSON.parse(localStorage.getItem('@Omni:currentTeam')) || null,
	teamsModalOpen: false,
})

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data })
export const setTeam = (state, { team }) => {
	localStorage.setItem('@Omni:currentTeam', JSON.stringify(team))
	return state.merge({
		active: team,
	})
}
export const openModal = state => state.merge({ teamsModalOpen: true })
export const closeModal = state => state.merge({ teamsModalOpen: false })

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.GET_TEAMS_SUCCESS]: getSuccess,
	[Types.SET_ACTIVE_TEAM]: setTeam,
	[Types.OPEN_TEAMS_MODAL]: openModal,
	[Types.CLOSE_TEAMS_MODAL]: closeModal,
})
