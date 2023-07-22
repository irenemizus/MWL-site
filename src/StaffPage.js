import React, { Component } from 'react';

import StaffCatButtons from './StaffCatButtons';

import './Page.css';
import ClickButton from "./ClickButton";

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
				let prefix = '/people/';

				//let myTabClick = tabClick.bind(this, curImgKey);
				//if (this.props.location.pathname === prefix + curImgKey) {
				let tabClick = () => {
					console.log(curImgKey)
					this.setState(
						{
							photoKeys: this.state.photoKeys,
							selectedKey: curImgKey
						}
					);
				}

				buttonView = <ClickButton title={curImgKey} active={this.state.selectedKey === curImgKey} handler={tabClick}/>;

					//image = <div><img className="foto_team" alt="" src={'/img/foto/' + this.props.photos[i].url}></img></div>;
				//}
				// else {
				// 	buttonView = <PageButton colors={this.props.colors} key={i} index={curImgKey}
				// 							 title={curImgKey} prefix={prefix}/>;
				// }

				photoButtons.push(buttonView);
			}
			image = <div><img className="foto_team" alt="" src={'/img/foto/' + lastUrl}></img></div>;
		}

		return (
				<div className="foto_frame">
					<div>{photoButtons}</div>
					<div>{image}</div>
					<StaffCatButtons colors="light" staffCatTitles={this.props.staffCatTitles} location={this.props.location} />
				</div>
		);
  	}
}