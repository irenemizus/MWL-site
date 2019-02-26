import React, { Component } from 'react';

import PageButton from './PageButton';

import './ArticlePagesList.css';

export default class MainDirButtons extends Component {
	constructor(props) {
		super(props);
	}

  	render() {
  		const { location } = this.props;
		let directoryButtons = [];
		for (let i in this.props.dir) {
			let buttonView;
			let prefix;
			if (this.props.maindir) {
    			prefix = "/" + this.props.maindir;
    		} else {
    			prefix = "/";
    		}
			
			let url;
    		if (this.props.url) {
    			url = this.props.url
    		} else {
    			url = " "
    		}
    		
    		let lf;
    		if (this.props.linkfrom) {
    			lf = this.props.linkfrom
    		} else {
    			lf = ""
    		}
			
			if (this.props.dir[i].link_from === "IndexPage" || this.props.dir[i].link_from === "instrum") {
				if (location.pathname === prefix + url && i === url) {
   					buttonView = <PageButton active={true} key={i} index={i} title={this.props.dir[i].short_title} prefix={prefix}/>;
   				} else if (location.pathname === prefix + lf + "/" + url && i === lf) {
   					buttonView = <PageButton key={i} index={i} title={this.props.dir[i].short_title} prefix={prefix} linkfrom={lf}/>;
   				} else {			
   					buttonView = <PageButton colors={this.props.colors} key={i} index={i} title={this.props.dir[i].short_title} prefix={prefix}/>;
 	   			}		 
			
				directoryButtons.push(buttonView);
			}
		}

		return (
			<div className="article_pages_list">
				{directoryButtons}
			</div>
		);
  	}
}