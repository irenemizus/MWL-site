import React, { Component } from 'react';
import './Page.css';


export default class Devices extends Component {
  	render() {
    	let staffCategoryList = [];
		let key = 0;
		for (let cat_id in this.props.staff) {
			staffCategoryList.push(
				<StaffCategory key={key++} categoryId={cat_id} category={this.props.staff[cat_id]}/>
			);	
		}

		return (
			<div className="page">
				<div>
					 {staffCategoryList}
				</div>
			</div>
		);
  	}
}