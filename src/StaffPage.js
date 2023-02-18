import React, { Component } from 'react';

import StaffCatButtons from './StaffCatButtons';

import './Page.css';
import PageButton from "./PageButton";

export default class StaffPage extends Component {
	constructor(props) {
		super(props);
		let keys = Object.keys(props.photos).sort();
		let lastKey = keys[keys.length - 1];

		this.state = {
			photoKeys: keys,
			selectedKey: lastKey
		};
	}

	render() {
//  		window.scrollTo(0, 0);
		let photoButtons = [];
		let image;
		if (this.props.photos) {
			let lastImg = this.props.photos[this.state.selectedKey];
			let lastUrl = lastImg.url;
			image = <img className="foto_team" alt="" src={'/img/foto/' + lastUrl}></img>;
			for (let i in this.state.photoKeys) {
				let curImgKey = this.state.photoKeys[i]
				let buttonView;
				let prefix = '/people/';

				if (this.props.location.pathname === prefix + curImgKey) {
					buttonView = <PageButton active={true} key={i} index={curImgKey} title={curImgKey}
											 prefix={prefix}/>;
					image = <img className="foto_team" alt="" src={'/img/foto/' + this.props.photos[i].url}></img>
				} else {
					buttonView = <PageButton colors={this.props.colors} key={i} index={curImgKey}
											 title={curImgKey} prefix={prefix}/>;
				}

				photoButtons.push(buttonView);
			}
		}

		return (
				<div className="foto_frame">
					 <div>{image}</div>
					 <StaffCatButtons colors="light" staffCatTitles={this.props.staffCatTitles} location={this.props.location} />
				</div>
		);
  	}
}