import React from 'react'
import profilepic from './profilepic.jpg';
import './body.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import { height } from '@material-ui/system';
import { whiteSpace } from '@material-ui/core/Box'


const Body = () => {
	return (
		<div>
		<Box height = {200} component="div" whiteSpace="nowrap"></Box>
		<Grid container>
     		<Grid item xs height='400px' className = 'col1'> 
         	 	<img src = {profilepic} alt = "pp" style = {{
			  	borderRadius: '50%',
			  	}} />
     		</Grid>
     		<Grid item xs height='400px' className = 'col2'>
     			Hello World!
    	 	</Grid>
		</Grid>

		<Grid container>
     		<Grid item xs={6} className = 'col3'> 
         	 	<h1>I'm Web Developer Giselle Su</h1>
     		</Grid>
     		<Grid item xs={6} className = 'col4'>
     		Hello World!
    		 </Grid>
		</Grid>
		</div>
	)
}

export default Body