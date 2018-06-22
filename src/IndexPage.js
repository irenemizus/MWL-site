import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import './ArticlePagesList.css';
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
			<table>
				<tr>
					<td>
						<div  className="page">	
							<h1>Main directions of activity:</h1>
  							<div className="article_title"><ul><ol type="1">
								{list_elem}
  							</ol></ul></div>
  						</div>
  					</td>
  				</tr>
  				<tr>
    				<td>
    					<div  className="page">
    						<h2>We  can supply  spectroscopic data and perform  equipment testing for planetary and interstellar remote sensing by millimeter and submillimeter waves</h2>
    					</div>
    				</td>
  				</tr>
  			</table>
		);
  	}
}