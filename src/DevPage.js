import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import ParagraphDev from './ParagraphDev';

import './Page.css';

export default class DevPage extends Component {
  	render() {
//  		window.scrollTo(0, 0);
  		let title;
  		if (this.props.device.full_title) {
  			title = this.props.device.full_title;
  		}
  		else {
  			title = this.props.device.short_title;
  		}
		
		let paragraph_dev;
		let paragraphs = [];
		if (this.props.device.structure) {
  			var pari;
  			for (pari in this.props.device.structure) {
  				var par = this.props.device.structure[pari];
  				let imgs = [];
  				var imgi;
  				var paragraph;
  				if (par.images && par.text) {
  					for (imgi in par.images) {
  						imgs.push(par.images[imgi]);
  					}
  					paragraph = {text: par.text, images: imgs};
  				}
  				else if (par.text) {
  					paragraph = {text: par.text};
  				}
  				else if (par.images) {
  					for (imgi in par.images) {
  						imgs.push(par.images[imgi]);
  					}
  					paragraph = {images: imgs};
  				}
  				else {
  					paragraph = {};
  				}
  				paragraph_dev = <ParagraphDev paragraph={paragraph} key={pari}/>
  				paragraphs.push(paragraph_dev);
  			}
  
  		}
  		
		return (
			<div className="page">
				<div className="device_page">
					 <h1>{renderHTML(title)}</h1>
					 {paragraphs}
				</div>
			</div>
		);
  	}
}