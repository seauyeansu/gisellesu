import React, { Component } from "react";
import profilepic from './profilepic.jpg';
import { gsap } from 'gsap';
import { TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap"; 


class ProfilepicTween extends Component {

	constructor(props){
		super(props);
		// profile picture container
		this.ppContainer = null;
		// profile picture tween
		this.ppTween = null;
	}

	componentDidMount(){
		// use the node ref to create the animation
    	this.ppTween = gsap.to(this.ppContainer, 2, {x: 225});
	}

	render() {
		return (
			<img 
				src = {profilepic} 
				alt = "" 
				style = {{borderRadius: '50%'}}
				ref={ img => this.ppContainer = img}
			/>
		)		
	}	
}

export default ProfilepicTween;