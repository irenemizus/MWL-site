import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';

import './App.css';


const Root = (props) => (
	<HashRouter>
		<App />
	</HashRouter>
)

export default Root;