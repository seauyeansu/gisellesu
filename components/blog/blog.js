import React from 'react'
import './blog.css';
import Box from '@material-ui/core/Box';
import MystoryTween from '../animation/mystorytween.js';

const Blog = () => {
	return (
		<div>
		<Box className ='blogtitle'>
			<h1>Blog</h1>
		</Box>
		<Box className ='myblog'>
			<div id = "mystory">
			<p>Work-in-Progress</p>
			</div>
			<MystoryTween />
		</Box>
		</div>
	)
}

export default Blog