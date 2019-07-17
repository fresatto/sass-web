import React, { Component } from 'react'
import TeamSwitcher from '../../components/TeamSwitcher'
import { Container } from './styles'

export default class Main extends Component {
	render() {
		return (
			<Container>
				<TeamSwitcher />
			</Container>
		)
	}
}
