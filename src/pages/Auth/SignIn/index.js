import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Title, Form } from './styles'

// Components
import Button from '../../../styles/components/Button'

// Redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Actions
import { Creators as AuthActions } from '../../../store/ducks/auth'

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleSubmitForm = e => {
		e.preventDefault()
		const { signInRequest } = this.props
		const { email, password } = this.state

		this.setState({
			email: '',
			password: '',
		})

		signInRequest(email, password)
	}

	render() {
		const { email, password } = this.state
		return (
			<Container>
				<Form onSubmit={this.handleSubmitForm}>
					<Title>Boas vindas</Title>
					<label htmlFor="email">Email</label>
					<input
						value={email}
						type="text"
						id="email"
						name="email"
						autoComplete="off"
						onChange={this.onChange}
					/>
					<label htmlFor="password">Senha</label>
					<input
						value={password}
						type="password"
						id="password"
						name="password"
						autoComplete="off"
						onChange={this.onChange}
					/>
					<Button size="default" color="default" type="submit">
						Entrar
					</Button>
				</Form>
			</Container>
		)
	}
}

SignIn.propTypes = {
	loadingAuth: PropTypes.bool.isRequired,
	signInRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
	loadingAuth: state.auth.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignIn)
