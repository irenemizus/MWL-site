import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './Page.css';

class ImageDiv extends Component {
	render() {
		var image_title_style = {
		    "verticalAlign": "middle",
			"textAlign": "center",
			"margin": "0 10pt 10pt 0",
    	}
    	    	
		var title_style = {			
		    "verticalAlign": "middle",
		    "marginBottom": "15pt",
		    "marginLeft": "10pt",
		    "fontSize": "95%"
    	}
    	
    	if (this.props.align) {
    		title_style["textAlign"] = this.props.align;
    	} else
    		title_style["textAlign"] = "center";
    		
    	if (this.props.captpos) {
    		image_title_style["display"] = "inline-block";
    		title_style["display"] = "inline-block";
    		title_style["textAlign"] = "left";
    		title_style["maxWidth"] = "40%";	
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
			<div className="device_block" style={this.props.style} >
				{data}
			</div>
		);
	}
}

class ParagraphOrdin extends Component {
	render() {
		let subtitle;
		if (this.props.paragraph.subtitle) {
			subtitle = this.props.paragraph.subtitle;
		}
		else {
			subtitle = '';
		}
		
		let text;
		if (this.props.paragraph.text) {
			text = this.props.paragraph.text;
		}
		else {
			text = '';
		}
		
		let percent = 100;
		let mw;
		if (text === '' && this.props.paragraph.images) {
			mw = percent / this.props.paragraph.images.length;
		}
				
		let imageDiv = [];
		let img_prefix = this.props.img_prefix;
		if (this.props.paragraph.images) {
			for (let imgi in this.props.paragraph.images) {
				let maxWidthInd;
				if (this.props.paragraph.images[imgi].maxwidth) {
					maxWidthInd = this.props.paragraph.images[imgi].maxwidth;
				}
				else {
					maxWidthInd = "700px";
				}

				let minWidthInd;
				if (this.props.paragraph.images[imgi].minwidth) {
					minWidthInd = this.props.paragraph.images[imgi].minwidth;
				}

				// Boo!
				var image;
				if (this.props.paragraph.images[imgi].file) {
					image = <img alt="" style={{"maxWidth": maxWidthInd, "minWidth": minWidthInd}} src={img_prefix + this.props.paragraph.images[imgi].file} key={imgi}></img>;
				} else if (this.props.paragraph.images[imgi].custom) {
					let customStruct = this.props.paragraph.images[imgi].custom;
					let customStructRend = renderHTML(customStruct);
					image = customStructRend;
				}
				
				var capt = "";
				var captpos = "";
				if (this.props.paragraph.images[imgi].caption) {
					capt = this.props.paragraph.images[imgi].caption;
				}
				if (this.props.paragraph.images[imgi].captpos) {
					captpos = this.props.paragraph.images[imgi].captpos;
				}
				var align = "";
				if (this.props.paragraph.images[imgi].align) {
					align = this.props.paragraph.images[imgi].align;
				}
				imageDiv[imgi] = <ImageDiv style={{"width": "" + mw + "%"}} image={image} caption={capt} captpos={captpos} align={align} key={imgi}/>
			}
		}
		
		
		let par;
		if (subtitle !== '') {
			par = <div className="page"><h2>{renderHTML(subtitle)}</h2></div>
		}
		else if (text !== '' && imageDiv.length === 1) {
			par = <div><div>{imageDiv[0]}</div><div>{renderHTML(text)}</div></div>
		}
		else if (text === '' && imageDiv.length === 1) {
			par = <div>{imageDiv[0]}</div>
		}
		else if (text !== '' && imageDiv.length === 0) {
			par = <div>{renderHTML(text)}</div>
		}
		else if (text === '' && imageDiv.length === 2) {
			par = <div style={{"verticalAlign":"bottom"}}>{imageDiv[0]}{imageDiv[1]}</div>
		}
		
		return (
			<div>
				{par}
				<div style={{"clear": "both"}}></div>
			</div>
		);
	}
}

export default ParagraphOrdin;