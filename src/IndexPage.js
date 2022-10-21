import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './Page.css';

export default class IndexPage extends Component {
  	render() {
		let list_elem = [];
		var i;
		for (i in this.props.dirs) {
			if (this.props.dirs[i].link_from === "IndexPage") {
				list_elem.push(<li><Link to={'/' + i}>{renderHTML(this.props.dirs[i].title)}</Link></li>);
			}
		}

		return (
			<div className="page">
				<h1>Main directions of activity</h1>
				<ol type="1">
					{list_elem}
				</ol>
				<div className="big_text">We can supply spectroscopic data and perform  equipment testing for planetary and interstellar remote sensing by millimeter and submillimeter waves</div>
  			</div>
		);
  	}
}