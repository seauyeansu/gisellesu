import React, { Component } from "react";
import { gsap } from 'gsap';
import { TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap"; 



class ProfiletextTween extends Component {

	constructor(props){
		super(props);
		// profile text container
		this.ptContainer = null;
		// profile text tween
		this.ptTween = null;
	}

	componentDidMount(){
		// use the node ref to create the animation
		this.ptContainer = document.getElementById("profiletext");
    	this.ptTween = gsap.from(this.ptContainer, 1, {x: 300});
	}


	render() {
		return (
			<div ref={div => this.ptContainer = div} />
		)		
	}	

}

export default ProfiletextTween;