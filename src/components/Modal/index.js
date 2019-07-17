import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'

const Modal = ({ size, children }) => (
	<Container>
		<Content size={size}>{children}</Content>
	</Container>
)

Modal.propTypes = {
	size: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
}

export default Modal
