import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from '../components/navbar/navbar.js';
import { BrowserRouter as Router } from 'react-router-dom'; 

class App extends React.Component {
	render () {
		return (
			<Router>

			<Navbar />

			</Router>
			)
	}
}
	
ReactDOM.render((
	<Router>
	<App />,
	</Router>
	),
	document.getElementById('app')
	)
