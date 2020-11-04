import React from 'react'

import profilepic from './profilepic.jpg';

const Body = () => {
	return (
		<div>
			 <img src = {profilepic} alt = "pp" style = {{
			 	borderRadius: '50%',
			 	display: 'flex',
			 	justifyContent: 'left',
			 	alignItems: 'center',
			 	height: '150px',
			 	width: '125px',
			 }} />
		</div>
	)
}

export default Body