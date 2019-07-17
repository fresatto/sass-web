import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.6);

	display: flex;
	align-items: center;
	justify-content: center;
`

export const Content = styled.div`
	background: #353940;
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: 350px;
	padding: 0 40px;
	justify-content: center;
	height: 250px;
	border-radius: 3px;

	form {
		display: flex;
		flex-direction: column;
		label {
			text-transform: uppercase;
			font-size: 10px;
			margin-bottom: 3px;
			color: #ccc;
		}

		input {
			height: 35px;
			padding: 0 10px;
			border: none;
			margin-bottom: 0.5rem;
			border-radius: 3px;
			outline: 0;
			background: #2b2d32;
			color: #ccc;
			border: 1px solid #1a1b1e;
		}
	}
`
