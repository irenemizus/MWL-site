import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './ArticlePagesList.css';

export default class ClickButton extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: props.title,
			handler: props.handler
		}
	}
	
	render() {
		var buttonStyle;
	
		if (this.props.active) {
			buttonStyle = "page_button_active";
		} else {
			if (this.props.colors === "dark")
				buttonStyle = "page_button_dark";
			else
				buttonStyle = "page_button_light";
		}

		var title = renderHTML(this.state.title)
		var boxStyle = { 
			"width": "100%"
		}
		if (title.length <= 4) {
			boxStyle.maxWidth = "35pt";
		} else if (title.length === 9 || title.length === 10) {
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
					<div onClick={this.state.handler} style={linkStyle}>{title}</div>
				</div>
			)
		}

	}
}