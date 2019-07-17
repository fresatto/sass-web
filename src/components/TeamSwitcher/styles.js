import styled from 'styled-components'

export const Container = styled.div`
	background-color: #202225;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const Teams = styled.nav``

export const Team = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	margin-bottom: 0.5rem;
	img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		transition: 0.2s ease-in-out;

		:hover {
			border-radius: 5px;
		}
	}

	h3 {
		font-size: 14px;
	}
`

export const NewTeam = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px dashed rgba(255, 255, 255, 0.3);
	color: rgba(255, 255, 255, 0.3);
	background: transparent;
	font-size: 11px;
	transition: 0.2s;

	:hover {
		border: 1px dashed rgba(255, 255, 255, 0.6);
		color: rgba(255, 255, 255, 0.6);
	}
`
