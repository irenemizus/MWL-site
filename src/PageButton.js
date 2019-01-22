import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';

export default class PageButton extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: props.title,
			index: props.index,
			prefix: props.prefix
		}
	}
	
	render() {
		var buttonStyle;
	
		if (this.props.active) {
			buttonStyle = "page_button_active";
		} else {
			if (this.props.colors === "dark") buttonStyle = "page_button_dark";
			else buttonStyle = "page_button_light";
		}

		var title = renderHTML(this.state.title)
		var boxStyle = { 
			"width": "100%"
		}
		if (title.length <= 4) {
			boxStyle.maxWidth = "35pt";
		} else if (title.length === 9) {
			boxStyle.maxWidth = "74pt";
		} else {
			boxStyle.maxWidth = "150pt";
		}		
		
		var linkStyle = {"display": "block", "textAlign": "center"}
		
		if (this.props.active) {
			return (
				<div style={boxStyle} className={buttonStyle}>
					<div style={linkStyle}>{title}</div>
				</div>
			)
		} else {
			return (
				<div style={boxStyle} className={buttonStyle}>
					<Link style={linkStyle} to={this.state.prefix + renderHTML(this.state.index)}>{title}</Link>
				</div>
			)
		}		
		
	}
}