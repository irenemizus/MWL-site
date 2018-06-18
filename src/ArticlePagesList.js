import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import PageButton from './PageButton';

import './ArticlePagesList.css';

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
    		let prefix = '/list/page/';
    		
    		if (this.props.location.pathname === prefix + this.state.pageTitles[i]) {
   				buttonView = <PageButton active={true} key={i} index={this.state.pageTitles[i]} title={curPageTitle} prefix={prefix}/>;
   			} else {
    			buttonView = <PageButton colors={this.props.colors} key={i} index={this.state.pageTitles[i]} title={curPageTitle} prefix={prefix}/>;
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