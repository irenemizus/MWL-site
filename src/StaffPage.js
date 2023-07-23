import React, { Component } from 'react';

import StaffCatButtons from './StaffCatButtons';
import ClickButton from "./ClickButton";

import './Page.css';
import './ArticlePagesList.css';

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
		// window.scrollTo(0, 0);
		let photoButtons = [];
		let image;
		if (this.props.photos) {
			let lastImg = this.props.photos[this.state.selectedKey];
			let lastUrl = lastImg.url;
			for (let i in this.state.photoKeys) {
				let curImgKey = this.state.photoKeys[i]
				console.log(curImgKey);
				let buttonView;

				let tabClick = () => {
					console.log(curImgKey)
					this.setState(
						{
							photoKeys: this.state.photoKeys,
							selectedKey: curImgKey
						}
					);
				}

				buttonView = <ClickButton title={curImgKey} active={this.state.selectedKey === curImgKey} handler={tabClick} colors="light"/>;

				photoButtons.push(buttonView);
			}
			image = <div><img className="foto_team" alt="" src={'/img/foto/' + lastUrl}></img></div>;
		}

		return (
				<div className="foto_frame">
					<div style={{"margin": "5pt"}}>{photoButtons}</div>
					<div>{image}</div>
					<StaffCatButtons colors="light" staffCatTitles={this.props.staffCatTitles} location={this.props.location} />
				</div>
		);
  	}
}