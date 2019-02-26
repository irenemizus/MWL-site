import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import ParagraphOrdin from './ParagraphOrdin';

import './Page.css';
import './App.css';

export default class OrdinaryPage extends Component {    
  	render() {
  		window.scrollTo(0, 0);
  		
  		let img_prefix = this.props.img_prefix;

  		let title;
  		if (this.props.orpage.title) {
  			title = this.props.orpage.title;
  		}
  		else {
  			title = this.props.orpage.short_title;
  		}
		
		let paragraph_or;
		let paragraphs = [];
		if (this.props.orpage.structure) {
  			var pari;
  			for (pari in this.props.orpage.structure) {
  				var par = this.props.orpage.structure[pari];
  				let imgs = [];
  				var imgi;
  				var paragraph;
  				if (par.subtitle) {
  					paragraph = {subtitle: par.subtitle};
  				}
  				else if (par.images && par.text) {
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
  				paragraph_or = <ParagraphOrdin paragraph={paragraph} img_prefix = {img_prefix} key={pari}/>
  				paragraphs.push(paragraph_or);
  			}
  
  		}
  		
  		let outerClass = "";
        if (this.props.outerClass) {
               outerClass = this.props.outerClass;
        }

  		
		return (
			<div className="page">
				<div className="device_page" className={outerClass}>
					 <h1>{renderHTML(title)}</h1>
					 {paragraphs}
				</div>
			</div>
		);
  	}
}