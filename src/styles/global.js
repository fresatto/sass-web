/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family+Source+Sans+Pro');
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Source Sans Pro', sans-serif;
	}

	body {
		background: #353940;
		color: #fff;
		text-rendering: optimizeLegibility;
	}

	html, body, #root {
		height: 100%;
	}

	input, button {
		font-family: 'Source Sans Pro', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;
