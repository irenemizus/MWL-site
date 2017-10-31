import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';

class PageButton extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: props.title,
			index: props.index
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
		var boxStyle = { }
		if (title.length <= 4) {
			boxStyle.width = "35pt";
		} else {
			boxStyle.width = "74pt";
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
					<Link style={linkStyle} to={'/page/' + renderHTML(this.state.index)}>{title}</Link>
				</div>
			)
		}		
		
	}
}

export default class ArticlePagesList extends Component {
	constructor(props) {
		super(props);
    
	    this.state = {
	    	pageTitles: props.pageTitles
    	};
    }
    
  	render() {
    	let titleButtons = [];
    	for (let i in this.state.pageTitles) {
    		let curPageTitle = this.state.pageTitles[i].replace('-', '–');
    		let buttonView;
    		
    		if (this.props.location.pathname === '/page/' + this.state.pageTitles[i]) {
   				buttonView = <PageButton active={true} key={i} index={this.state.pageTitles[i]} title={curPageTitle} />;
   			} else {
    			buttonView = <PageButton colors={this.props.colors} key={i} index={this.state.pageTitles[i]} title={curPageTitle} />;
    		}
    				 
    		titleButtons.push(buttonView);
    	}

		return (
			<div className="article_pages_list">
				{titleButtons}
			</div>
		);
  	}
}