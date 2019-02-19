import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class ImageDiv extends Component {
	render() {
		var image_title_style = {
		    "verticalAlign": "middle",
			"textAlign": "center",
			"margin": "0 10pt 10pt 0",
    	}

		var title_style = {			
		    "verticalAlign": "middle",
		    "marginBottom": "15pt"
    	}
    	
    	if (this.props.align) {
    		title_style["textAlign"] = this.props.align;
    	} else
    		title_style["textAlign"] = "center";
    	
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
		let text;
		if (this.props.paragraph.text) {
			text = this.props.paragraph.text;
		}
		else {
			text = '';
		}
		
		let percent = 100;
		let mw;
		if (text === '') {
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

				var image = <img alt="" style={{"maxWidth": maxWidthInd}} src={img_prefix + this.props.paragraph.images[imgi].file} key={imgi}></img>;
				var capt = "";
				if (this.props.paragraph.images[imgi].caption) {
					capt = this.props.paragraph.images[imgi].caption;
				}
				var align = "";
				if (this.props.paragraph.images[imgi].align) {
					align = this.props.paragraph.images[imgi].align;
				}
				imageDiv[imgi] = <ImageDiv style={{"width": "" + mw + "%"}} image={image} caption={capt} align={align} key={imgi}/>
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

export default ParagraphOrdin;