import React from 'react';
import './about.css';
import Box from '@material-ui/core/Box';
import MystoryTween from '../animation/mystorytween.js';

const Aboutme = () => {
	return (
		<div>
		<Box className ='abouttitle'>
			<h1>My Story</h1>
		</Box>
		<Box className ='mystory'>
			<div id = "mystory">
			<p>Aesthetic makes me happy. I am inquisitive by nature, quietly confident and creatively 
			developing while exploring the world. As a mother of one, I enjoy bonding with my little one.</p>
			</div>
			<MystoryTween />
		</Box>
		<Box className = 'aboutdisplay'> </Box>
		</div>
	)
}

export default Aboutme