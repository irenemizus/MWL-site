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
    		
    		let prefix = '/instrum/devices/';
    		
    		if (location.pathname === prefix + devId && i === devId) {
   				buttonView = <PageButton active={true} key={i} index={i} title={curPageTitle} prefix={prefix}/>;
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