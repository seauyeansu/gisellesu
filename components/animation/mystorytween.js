import React, { Component } from "react";
import { gsap } from 'gsap';
import { TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap"; 


class MystoryTween extends Component {

	constructor(props){
		super(props);
		// my story container
		this.msContainer = null;
		// my story tween
		this.msTween = null;
	}

	componentDidMount(){
		// use the node ref to create the animation
		this.msContainer = document.getElementById("mystory");
    	this.msTween = gsap.from(this.msContainer, 1, {y: 300});
	}

	render() {
		return (
			<div ref={div => this.msContainer = div} />
		)		
	}	
}

export default MystoryTween;