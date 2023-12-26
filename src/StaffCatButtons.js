import React, { Component } from 'react';

import PageButton from './PageButton';

import './ArticlePagesList.css';

export default class StaffCatButtons extends Component {
	constructor(props) {
		super(props);
		
	    this.state = {
	    	staffCatTitles: props.staffCatTitles
    	};
    }

  	render() {
  		const { location } = this.props;
    	let categoryButtons = [];
    	for (let i in this.state.staffCatTitles) {
    		let curPageTitle = this.state.staffCatTitles[i].title;
    		let buttonView;
    		
    		let categoryId;
    		if (this.props.categoryId) {
    			categoryId = this.props.categoryId
    		} else {
    			categoryId = " "
    		}
    		
    		let url;
    		if (this.props.url) {
    			url = this.props.url
    		} else {
    			url = " "
    		}
    		
    		let link_from;
    		if (this.props.linkfrom) {
    			link_from = this.props.linkfrom
    		} else {
    			link_from = ""
    		}

    		let prefix = '/people/';
    		
    		if (location.pathname === prefix + categoryId && i === categoryId) {
   				buttonView = <PageButton disabled={true} active={true} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
			} else if (location.pathname.includes("/" + i + "/")) {
				// We are inside a subtree
				buttonView = <PageButton disabled={false} active={true} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
   			} else if (location.pathname === prefix + link_from + "/" + url && i === link_from) {
				buttonView = <PageButton key={i} index={i} title={curPageTitle} prefix={prefix} linkfrom={link_from}/>;
			} else {
   				buttonView = <PageButton colors={this.props.colors} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
    		}		 
    		
    		categoryButtons.push(buttonView);
    	}

		return (
			<div className="article_pages_list">
				{categoryButtons}
			</div>
		);
  	}
}