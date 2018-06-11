import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';

class Staff extends Component {
	render() {	
		return (
			<div>{renderHTML(this.props.associate.short_name)}</div>
		);
	}
}

class StaffCategory extends Component {
	render() {	
		let staffList = [];
		let key = 0;
		for (let i in this.props.category.staff) {
			staffList.push(
				<Staff key={key++} associate={this.props.category.staff[i]} />
			);	
		}
			
		return (
			<div className="page">
				<h1>{renderHTML(this.props.category.title)}</h1>
				<div>{staffList}</div>
			</div>
		);
	}
}


export default class StaffList extends Component {
	constructor(props) {
		super(props);
    
	    this.state = {
	    	staff: props.staff
    	};
    }
    
  	render() {
    	let staffCategoryList = [];
		let key = 0;
		for (let i in this.props.staff) {
			staffCategoryList.push(
				<StaffCategory key={key++} category={this.props.staff[i]} />
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