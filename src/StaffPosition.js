import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './Page.css';

export default class StaffPosition extends Component {
	render() {	
		let position_list = [];
		let key = 0;
		
		if (this.props.associate.position) {
			position_list.push(
				<span key={key++} className="associate_position">{renderHTML(this.props.associate.position)}</span>,
		        <span key={key++}>, </span>
		    )
		}
		if (this.props.associate.acad_degree) {
			position_list.push(
				<span key={key++} className="associate_acad_degree">{renderHTML(this.props.associate.acad_degree)}</span>,
		        <span key={key++}>, </span>
		    )
		}
		if (this.props.associate.acad_title) {
			position_list.push(
				<span key={key++} className="associate_acad_title">{renderHTML(this.props.associate.acad_title)}</span>,
		        <span key={key++}>, </span>
		    )
		}
		
		let last_comma = position_list.pop();	
		
		return (
			<div className={this.props.className}>
				{position_list}
			</div>
		);
	}
}