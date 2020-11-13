import React from 'react'
import './portfolio.css';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const Portfolio = () => {
	return (
		<div>
		<Box className ='ptitle'>
			<h1>Portfolio</h1>
		</Box>
		<Box className ='portfolio'>

		<Box className = 'prow1'>
 			<Box className = 'portfolio1'>
 				<Table className = 'ptable1'>
 			 	 <TableRow>
 			  		<h3>New Parent Registration Form </h3>
 			  	 </TableRow>
 				 <TableRow>
 				<Button variant="outlined" color="primary">
 				<a href="https://kindergarten.nixray.de/">
       			 Visit Website
       			</a>
      			</Button>
      			</TableRow>
      			</Table>
 			</Box>

 			<Box className = 'portfolio2'>
 				<Table className = 'ptable2'>
 			 	 <TableRow>
 			  		<h3>Flight & Flight Seat Selector </h3>
 			  	 </TableRow>
 				 <TableRow>
 				<Button variant="outlined" color="primary">
 				<a href="https://seauyeansu.github.io/flight-seat-selector/public/">
       			 Visit Website
       			</a>
      			</Button>
      			</TableRow>
      			</Table>
 			</Box>
 			</Box>

		</Box>

		</div>
	)
}

export default Portfolio