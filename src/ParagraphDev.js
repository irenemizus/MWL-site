import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class ImageDiv extends Component {
	render() {
		var image_title_style = {
//		    "display": "inline-block",

		    "verticalAlign": "middle",
			"textAlign": "center",
		    
//		    "marginTop": "5pt",
//		    "marginBottom": "5pt",
//		    "marginRight": "10pt",
			"margin": "0 10pt 10pt 0",
//		    "width": "120px",
//		    "height": "120px",
//		    "borderStyle": "solid",
//		    "borderWidth": "1px",
//    		"borderColor": "rgba(0, 0, 0, 0.2)"
    	}

		var title_style = {
//		    "display": "inline-block",
			"textAlign": "center",
		    "verticalAlign": "middle",
		    "marginBottom": "15pt"
    	}
    	
    	let caption;
    	if (this.props.caption) {
    		caption = this.props.caption;
    	}
    	else {
    		caption = "";
    	}

		let data;
		data = [
			<div key={1} style={image_title_style}>
				{this.props.image}
			</div>, 
			<div key={2} style={title_style}>
				{renderHTML(caption)}
			</div>
		]
		
		return (
			<div className="device_block">
				{data}
			</div>
		);
	}
}

class ParagraphDev extends Component {
	render() {
		let text;
		if (this.props.paragraph.text) {
			text = this.props.paragraph.text;
		}
		else {
			text = '';
		}
		let imageDiv = [];
		if (this.props.paragraph.images) {
			for (let imgi in this.props.paragraph.images) {
				if (this.props.paragraph.images.length === 1) {
					var image = <img alt="" src={'/img/dev/' + this.props.paragraph.images[imgi].file} key={imgi}></img>;
				} else if (this.props.paragraph.images.length === 2) {
					image = <img alt="" src={'/img/dev/' + this.props.paragraph.images[imgi].file} key={imgi}></img>;
				}
				var capt = "";
				if (this.props.paragraph.images[imgi].caption) {
					capt = this.props.paragraph.images[imgi].caption;
				}
				imageDiv[imgi] = <ImageDiv image={image} caption={capt} key={imgi}/>
			}
		}
		
		
		let par;
		if (text !== '' && imageDiv.length === 1) {
			par = <div><div>{imageDiv[0]}</div><div>{renderHTML(text)}</div></div>
		}
		else if (text === '' && imageDiv.length === 1) {
			par = <div>{imageDiv[0]}</div>
		}
		else if (text !== '' && imageDiv.length === 0) {
			par = <div>{renderHTML(text)}</div>
		}
		else if (text === '' && imageDiv.length === 2) {
			par = <div>{imageDiv[0]}{imageDiv[1]}</div>
		}
		
		return (
			<div>
				{par}
				<div style={{"clear": "both"}}></div>
			</div>
		);
	}
}

export default ParagraphDev;