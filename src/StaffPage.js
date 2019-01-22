import React, { Component } from 'react';

import StaffCatButtons from './StaffCatButtons';

import './Page.css';

export default class StaffPage extends Component {
  	render() {
//  		window.scrollTo(0, 0);
  		let image;
  		
  		let imgStyle = {
  			"width": "100%"
  		}
  		
		if (this.props.photo) {
			image = <img style={imgStyle} alt="" src={'/img/foto/' + this.props.photo.filename}></img>
		}

		return (
				<div>
					 <div>{image}</div>
					 <StaffCatButtons colors="light" staffCatTitles={this.props.staffCatTitles} location={this.props.location} />
				</div>
		);
  	}
}