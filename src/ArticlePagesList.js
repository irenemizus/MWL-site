import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';

class PageButton extends Component {
	constructor(props) {
		super();
		this.state = {
			title: props.title,
			index: props.index
		}
	}
	
	render() {
		return (
			<div className="page_button">
				<Link to={'/page/' + renderHTML(this.state.index)}>{renderHTML(this.state.title)}</Link>
			</div>
		)
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
    		
    		titleButtons.push(
    			<PageButton key={i} index={this.state.pageTitles[i]} title={curPageTitle} />
    		);
    	}

		return (
			<div className="article_pages_list">
				{titleButtons}
			</div>
		);
  	}
}
