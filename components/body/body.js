import React from 'react'
import './body.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { whiteSpace } from '@material-ui/core/Box';
import profilepic from './profilepic.jpg';
import ProfiletextTween from '../animation/profiletexttween.js';



const Body = () => {
	return (
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
     			<div id="profiletext">Hi, I'm Front-end Developer Giselle Su. </div>
     			
         	 	<ProfiletextTween />

    		 </Grid>
		</Grid>

		<Box height = {170} whiteSpace="nowrap"></Box>

		<Box className = 'row1'>I like to design and develop websites that are functionally and aesthetically pleasing.</Box>
     	<Box className = 'row2'>
 			<Box className = 'col3'></Box>
 			<Box className = 'col4'></Box>
     	</Box>

		</div>
	)
}

export default Body