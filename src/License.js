import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class License extends Component {
	constructor(props) {
		super();
		
		this.state = {
			url: props.url,
			backUrl: props.backUrl
		};
  	}

	downloadLinkClick() {
		this.props.history.goBack(); //push(this.state.backUrl);
	}

	render() {
	  	
		return (
			<div>
				<p>By clicking “Download” or “Open” you will gain access to the electronic version of the published journal article, which is placed here exclusively for personal and internal institutional use. If it is not your case press “Back” button and/or contact administrator.</p>
				<p><a target="_blank" href={this.state.url} onClick={this.downloadLinkClick.bind(this)}>Open</a></p>
				<p><a download={true} href={this.state.url} onClick={this.downloadLinkClick.bind(this)}>Download</a></p>
				<p><button onClick={this.downloadLinkClick.bind(this)}>Back</button></p>
			</div>
		);
	  }
}

export default withRouter(License);

