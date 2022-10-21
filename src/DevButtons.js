import React, { Component } from 'react';

import PageButton from './PageButton';

import './ArticlePagesList.css';

export default class DevButtons extends Component {
	constructor(props) {
		super(props);
		
	    this.state = {
	    	devTitles: props.devTitles
    	};
    }

  	render() {
  		const { location } = this.props;
    	let devButtons = [];
    	for (let i in this.state.devTitles) {
    		let curPageTitle = this.state.devTitles[i].short_title;
    		let buttonView;
    		
    		let devId;
    		if (this.props.devId) {
    			devId = this.props.devId
    		} else {
    			devId = " "
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
    		
    		let prefix = '/instrum/devices/';
    		
    		if (location.pathname === prefix + devId && i === devId) {
   				buttonView = <PageButton active={true} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
   			} else if (location.pathname === prefix + link_from + "/" + url && i === link_from) {
   				buttonView = <PageButton key={i} index={i} title={curPageTitle} prefix={prefix} linkfrom={link_from}/>;
   			} else {    		
   				buttonView = <PageButton colors={this.props.colors} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
    		}		 
    		
    		devButtons.push(buttonView);
    	}

		return (
			<div className="article_pages_list">
				{devButtons}
			</div>
		);
  	}
}