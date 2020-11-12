import React from 'react';
import './about.css';
import Box from '@material-ui/core/Box';
import MystoryTween from '../animation/mystorytween.js';

const Aboutme = () => {
	return (
		<div>
		<Box className ='title'>
			<h1>My Story</h1>
		</Box>
		<Box className ='mystory'>
			<div id = "mystory">
			<p>My programming journey started a year ago, when I discovered that I could put some images and 
			text together and publish them on the web. I am inquisitive by nature, quietly confident and eagerly 
			developing while exploring Europe and Asia. As a mother of one, I enjoy parenting.</p>
			</div>
			<MystoryTween />
		</Box>
		<Box className = 'display'> </Box>
		</div>
	)
}

export default Aboutme