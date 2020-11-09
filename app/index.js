import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from '../components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from '../components/home/home.js';
import About from '../components/about/about.js';
import Blog from '../components/blog/blog.js';
import Contact from '../components/contact/contact.js';
import Portfolio from '../components/portfolio/portfolio.js';


class App extends React.Component {
	render () {
		return (
			<Router>

			<Navbar />
			<Switch>
			 <Route path = "/" exact component={Home} />
			 <Route path = "/about" exact component={About} />
			 <Route path = "/blog" exact component={Blog} />
			 <Route path = "/portfolio" exact component={Portfolio} />
			 <Route path = "/contact" exact component={Contact} />
			 </Switch>
         	
			</Router>

			
			);
	}
}
	
ReactDOM.render((
	<Router>
	<App />
	</Router>
	),
	document.getElementById('app')
	)
