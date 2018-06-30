import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';

import App from './App';

const Root = (props) => (
	<HashRouter>
		<App />
	</HashRouter>
)

export default Root;