import React from 'react'
import './body.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { whiteSpace } from '@material-ui/core/Box';
import profilepic from './profilepic.jpg';
import ProfiletextTween from '../animation/profiletexttween.js';
import CodeIcon from '@material-ui/icons/Code';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';


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
     			<div id="profiletext">I'm Web Developer Giselle Su.</div>
         	 	<ProfiletextTween />
    		 </Grid>
		</Grid>
		<Box height = {170} whiteSpace="nowrap"></Box>

		<Box className = 'row1'>I like to design and develop websites that are functionally and aesthetically pleasing.</Box>
     	<Box className = 'row2'>
 			<Box className = 'col3'>
 			  <Table className = 'table1'>
 			 	 <TableRow>
 			  		<CodeIcon />
 			  	 </TableRow>	
 			  	 <TableRow>
 			  	 	Front-end Developer
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	Tech Stack
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	Javascript, HTML, CSS, SASS, Reactjs
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
 			  		<SchoolIcon />
 			  	 </TableRow>	
 			  	 <TableRow>
 			  	 	Mentoring
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	Tech Stack
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	Javascript, HTML, CSS, SASS, Reactjs	
 			  	 </TableRow>
 			  	 <TableRow>
 			  	 	<Button variant="contained" color="primary">
  						Learn more
					</Button>
 			  	 </TableRow>	
 			  </Table>	 	
 			  </Box>
			</Box>
 
     	

		</div>
	)
}

export default Body