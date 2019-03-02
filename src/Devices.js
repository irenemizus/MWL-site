import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';
import AvatarEditor from 'react-avatar-editor';

import './Page.css';

class Device extends Component {
	render() {	
		let image;
		if (this.props.device.preview_img) {
			image = <AvatarEditor
						image={'/img/dev/' + this.props.device.preview_img.filename}
						width={120}
						height={120}
						border={0}
						position={this.props.device.preview_img.position}
						color={[255, 255, 255, 1]}
						scale={this.props.device.preview_img.scale}
						rotate={0}
					/>
		}
		
		var image_title_style = {
//		    "display": "inline-block",

		    "verticalAlign": "middle",
//		    "marginTop": "5pt",
//		    "marginBottom": "5pt",
//		    "marginRight": "10pt",
			"margin": "5pt 10pt",
		    "width": "120px",
		    "height": "120px",
		    "borderStyle": "solid",
		    "borderWidth": "1px",
    		"borderColor": "rgba(0, 0, 0, 0.2)"
    	}

		var title_style = {
//		    "display": "inline-block",
			"textAlign": "center",
		    "verticalAlign": "middle",
		    "marginBottom": "15pt"
    	}

		var image_link_style = {
		    "display": "inline-block"
    	}
    	
    	let short_title;
    	if (this.props.device.short_title) {
    		short_title =  <div className="associate_position">
							{renderHTML(this.props.device.short_title)}
						</div>
    	}
				
		let data;
		let key = 0;
		data = [
			<div style={image_title_style} key={key++}>
				<Link style={image_link_style} to={'/instrum/devices/' + this.props.page_id}>
					{image}
				</Link>
			</div>, 
			<div style={title_style} key={key++}>
				<div className="associate_name">
					<Link to={'/instrum/devices/' + this.props.page_id}>
						{short_title}
					</Link>
				</div>
			</div>
		]
		
		return (
			<div className="img_block">
				{data}
			</div>
		);
	}
}

export default class Devices extends Component {
	render() {	
		let devList = [];
		let key = 0;
		for (let i in this.props.category.devices) {
			devList.push(
				<Device key={key++} device={this.props.category.devices[i]} page_id={i}/>
			);	
		}
			
		return (
			<div className="page">
				<h1>{renderHTML(this.props.category.title)}</h1>
				<div>{devList}</div>
				<div style={{"clear": "both"}}></div>
			</div>
		);
	}
}