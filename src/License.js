import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';

class License extends Component {

  	searchTitleByURL(url) {
		for (let pari in this.props.page.paragraphs) {
			var par = this.props.page.paragraphs[pari];
			for (let arti in par.articles) {
				var art = par.articles[arti];
				
				if (url === art.url || url === art.url_trans) {
					return art.title;
				}
			}
		}
	  	return null;
	}

	constructor(props) {
		super(props);
		
		var lTitle = this.searchTitleByURL(props.url);
		
		this.state = {
			url: props.url,
			backUrl: props.backUrl,
			title: lTitle
		};
  	}
  	

	downloadLinkClick() {
		this.props.history.goBack(); //push(this.state.backUrl);
	}

	render() {
		var fullURL; 
		if (this.state.url.startsWith("http")) {
			fullURL = this.state.url;
		}
		else {
			fullURL = "/Papers_pdf/" + this.state.url;
		}
	
		return (
			<div className="license_alert_background">
				<div className="license_alert">
					<p>{renderHTML(this.state.title)}</p>
					<div className="license_disclaimer">
						<p>By clicking “Download” or “Open” you will gain access to the electronic version of the published journal article, which is placed here exclusively for personal and internal institutional use. If it is not your case press “Back” button and/or contact administrator.</p>
					</div>
					<div className="license_button_container">
						<a className="btn" target="_blank" href={fullURL} onClick={this.downloadLinkClick.bind(this)}>Open</a>
						<a className="btn" download={true} href={fullURL} onClick={this.downloadLinkClick.bind(this)}>Download</a>
						<a className="btn back" target="_blank" onClick={this.downloadLinkClick.bind(this)}>Back</a>
					</div>
				</div>
			</div>
		);
	  }
}

export default withRouter(License);

