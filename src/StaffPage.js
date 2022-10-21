import React, { Component } from 'react';

import StaffCatButtons from './StaffCatButtons';

import './Page.css';

export default class StaffPage extends Component {
  	render() {
//  		window.scrollTo(0, 0);
  		let image;
  		
		if (this.props.photo) {
			image = <img className="foto_team" alt="" src={'/img/foto/' + this.props.photo.filename}></img>
		}

		return (
				<div className="foto_frame">
					 <div>{image}</div>
					 <StaffCatButtons colors="light" staffCatTitles={this.props.staffCatTitles} location={this.props.location} />
				</div>
		);
  	}
}