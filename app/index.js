import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from '../components/navbar/navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from '../components/home/home.js';
import About from '../components/about/about.js';
import Blog from '../components/blog/blog.js';
import Contact from '../components/contact/contact.js';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { whiteSpace } from '@material-ui/core/Box';
import profilepic from './profilepic.jpg';
import development from './development.png';
import mentor from './mentor.png';
import ProfiletextTween from '../components/animation/profiletexttween.js';
import CodeIcon from '@material-ui/icons/Code';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import Portfolio from '../components/portfolio/portfolio.js';


class App extends React.Component {
	render () {
		return (
			<div>
			<Router>

			<Navbar />
			<Switch>
			 <Route path = "/" exact component={Home} />
			 <Route path = "/about" exact component={About} />
			 <Route path = "/blog" exact component={Blog} />
			 <Route path = "/contact" exact component={Contact} />
			 </Switch>
         	
			</Router>

		<div>
		<Box height = {170} whiteSpace="nowrap"></Box>
		<Grid container>
     		<Grid item xs={6} className = 'col1'> 
         	 	<img 
				src = {profilepic} 
				alt = "" 
				style = {{borderRadius: '50%'}}
				/>
     		</Grid>
     		<Grid item xs={6} className = 'col2'>
     			<div id="profiletext">I'm Front-end Developer Giselle Su.</div>
         	 	<ProfiletextTween />
    		 </Grid>
		</Grid>
		<Box height = {170} whiteSpace="nowrap"></Box>

		<Box className = 'row1'>I like to design and develop websites that are functionally and aesthetically pleasing.</Box>
     	<Box className = 'row2'>
 			<Box className = 'col3'>
 			  <Table className = 'table1'>
 			 	 <TableRow>
 			  		<img 
					src = {development}
					width = '10%'
					height = '45%'
					/>
 			  	 </TableRow>	
 			  	 <TableRow>
 			  	 	<h2>Front-end Development</h2>
 			  	 </TableRow>
 			  	 <TableRow className = 'tr1'>
 			  	 	Pixel Perfect Web Design and Development
 			  	 </TableRow>
 			  	 <TableRow className = 'tr2'>
 			  	 	Languages: Javascript, HTML, CSS, SASS, Reactjs
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	<Button variant="contained" color="primary">
  						Learn more
					</Button>
 			  	 </TableRow>	
 			  </Table>	 	
 			 </Box>
 			<Box className = 'col4'>
 			<Table className = 'table2'>
 			 	 <TableRow>
 			  		<img 
					src = {mentor}
					width = '12%'
					height = '50%'
					/>
 			  	 </TableRow>	
 			  	 <TableRow>
 			  	 	<h2>Mentoring</h2>
 			  	 </TableRow>
 			  	 <TableRow className = 'tr3'>
 			  	 	Empowering Women in Tech
 			  	 </TableRow>
 			  	 <TableRow className = 'tr4'>
					Learn to code and network in technology to build a better future together
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	<Button variant="contained" color="primary">
  						Learn more
					</Button>
 			  	 </TableRow>	
 			  </Table>	 	
 			  </Box>
			</Box>

 			<Box height = {400} whiteSpace="nowrap"></Box>


 			  <Portfolio />


		</div>
		</div>
			)
	}
}
	
ReactDOM.render((
	<Router>
	<App />
	</Router>
	),
	document.getElementById('app')
	)
