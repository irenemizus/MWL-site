import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import AvatarEditor from 'react-avatar-editor';

import './Page.css';

class Staff extends Component {
	render() {	
		let image;
		if (this.props.associate.photo) {
//			image = <img url={'/img/foto/' + this.props.associate.photo} height="85"></img>
			image = <AvatarEditor
						image={'/img/foto/' + this.props.associate.photo.filename}
						width={120}
						height={120}
						border={0}
						position={this.props.associate.photo.position}
						color={[255, 255, 255, 1]}
						scale={this.props.associate.photo.scale}
						rotate={0}
					/>
		}
		
		var image_title_style = {
		    "display": "inline-block",
		    "verticalAlign": "middle",
		    "marginTop": "5pt",
		    "marginBottom": "5pt",
		    "marginRight": "10pt",
		    "width": "120px",
		    "height": "120px",
		    "borderStyle": "solid",
		    "borderWidth": "1px",
    		"borderColor": "rgba(0, 0, 0, 0.2)"
    	}

		var title_style = {
		    "display": "inline-block",
		    "verticalAlign": "middle",
		    "marginBottom": "15pt"
    	}

		var image_link_style = {
		    "display": "inline-block"
    	}
    	
    	let position;
    	if (this.props.associate.position && this.props.category !== "former") {
    		position =  <div className="associate_position">
							{renderHTML(this.props.associate.position)}
						</div>
    	}
				
		let data;
		let key = 0;
		if (this.props.associate.no_page) {
			data = [
				<div style={image_title_style} key={key++}>
					{image}
				</div>, 
				<div style={title_style} key={key++}>
					<div className="associate_name">
						{renderHTML(this.props.associate.short_name)}
					</div>
					{position}
				</div>
			]
		}
		else {
			data = [
				<div style={image_title_style} key={key++}>
					<Link style={image_link_style} to={'/people/' + this.props.category + '/' + this.props.page_id}>
						{image}
					</Link>
				</div>, 
				<div style={title_style} key={key++}>
					<div className="associate_name">
						<Link to={'/people/' + this.props.category + '/' + this.props.page_id}>
							{renderHTML(this.props.associate.short_name)}
						</Link>
					</div>
					{position}
				</div>
			]
		}
		
		return (
			<div>
				{data}
			</div>
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