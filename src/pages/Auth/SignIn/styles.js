import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background: #1a1b1e;
`

export const Title = styled.h1`
	color: #ccc;
	font-size: 18px;
	font-weight: 100;
	text-align: center;
	margin-bottom: 1rem;
`

export const Form = styled.form`
	background: #353940;
	width: 100%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	padding: 0 40px;
	justify-content: center;
	height: 250px;
	border-radius: 3px;

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
`
