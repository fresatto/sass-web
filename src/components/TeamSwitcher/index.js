import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TeamsActions from '../../store/ducks/teams'

import Modal from '../Modal'
import Button from '../../styles/components/Button'

import { Container, Teams, Team, NewTeam } from './styles'

class TeamSwitcher extends Component {
	static propTypes = {
		setActiveTeam: PropTypes.func.isRequired,
		getTeamsRequest: PropTypes.func.isRequired,
		openTeamsModal: PropTypes.func.isRequired,
		closeTeamsModal: PropTypes.func.isRequired,
		teamsModalOpen: PropTypes.bool.isRequired,
		active: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			slug: PropTypes.string,
		}),
		data: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
			})
		).isRequired,
	}

	handleCurrentTeam = team => {
		const { setActiveTeam } = this.props
		setActiveTeam(team)
	}

	componentDidMount() {
		const { getTeamsRequest } = this.props
		getTeamsRequest()
	}

	render() {
		const {
			data,
			openTeamsModal,
			closeTeamsModal,
			teamsModalOpen,
		} = this.props
		return (
			<Container>
				<Teams>
					{data.map(team => (
						<Team
							key={team.id}
							onClick={() => this.handleCurrentTeam(team)}
						>
							<img
								src={`https://ui-avatars.com/api/?font-size=0.33&background=0D8ABC&color=fff&name=${
									team.name
								}`}
								alt={`${team.name} logo`}
							/>
						</Team>
					))}
				</Teams>
				<NewTeam onClick={openTeamsModal}>NOVO</NewTeam>

				{teamsModalOpen && (
					<Modal>
						<form>
							<label>Nome</label>
							<input type="text" />
							<Button size="big" type="submit">
								Salvar
							</Button>
							<Button
								color="gray"
								size="small"
								onClick={closeTeamsModal}
							>
								Cancelar
							</Button>
						</form>
					</Modal>
				)}
			</Container>
		)
	}
}

const mapStateToProps = state => ({
	data: state.teams.data,
	active: state.teams.active,
	teamsModalOpen: state.teams.teamsModalOpen,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(TeamsActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamSwitcher)
