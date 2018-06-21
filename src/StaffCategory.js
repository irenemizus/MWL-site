import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import StaffPosition from './StaffPosition';

import './ArticlePagesList.css';
import './Page.css';

class Staff extends Component {
	render() {	
		let image;
		if (this.props.associate.photo) {
			image = <img src={'/img/foto/' + this.props.associate.photo} height="85"></img>
		}
				
		let data;
		if (this.props.associate.no_page) {
			data = [<td>{image}</td>, 
					<td valign="top">
						<div className="article_title">
							{renderHTML(this.props.associate.short_name)}
						</div>
						<StaffPosition  associate={this.props.associate}/>						
					</td>]
		}
		else {
			data = [<td><Link to={'/people/' + this.props.category + '/' + this.props.page_id}>{image}</Link></td>, 
					<td valign="top">
						<div className="article_title">
							<Link to={'/people/' + this.props.category + '/' +  this.props.page_id}>{renderHTML(this.props.associate.short_name)}</Link>
						</div>
						<StaffPosition associate={this.props.associate}/>						
					</td>]
		}
		
		return (
			<table border="0" cellpadding="3" cellspacing="0">
				<tr>
					{data}
				</tr>
			</table>
		);
	}
}

export default class StaffCategory extends Component {
	render() {	
		let staffList = [];
		let key = 0;
		let staff_category = this.props.categoryId;
		for (let i in this.props.category.staff) {
			staffList.push(
				<Staff key={key++} associate={this.props.category.staff[i]} category={staff_category} page_id={i}/>
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