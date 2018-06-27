import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './Page.css';

export default class OneFigPage extends Component {    
  	render() {
  		window.scrollTo(0, 0);

  		let title;
  		if (this.props.ofpage.title) title = this.props.ofpage.title;
  		
  		let image;
		if (this.props.ofpage.content.img) {
			image = <img src={'/img/' + this.props.ofpage.content.img} height="185" className="leftimg"></img>;
		}
		
        let main_text;
        if (this.props.ofpage.content.main_text) {
        	main_text = renderHTML(this.props.ofpage.content.main_text);
        }
  		
		return (
			<div className="page">
				<div>
					 <h1>{renderHTML(title)}</h1>
					 <div>{image}{main_text}</div>
				</div>
			</div>
		);
  	}
}