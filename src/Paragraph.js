import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom';

import Article from './Article';

import './Page.css';

var ArticleWithHistory = withRouter(Article);

class Paragraph extends Component {
	render() {
		let articlesList = [];
		for (let i in this.props.paragraph.articles) {
			var arti = this.props.paragraph.articles[i];
			if (arti.status == null || this.props.show_tp === true) {
				articlesList.push(
					<ArticleWithHistory key={i} article={arti} />
				)
			}	
		}
		
		return (
			<div>
				<h2>{renderHTML(this.props.paragraph.title)}</h2>
				<ol>
					 {articlesList}
				</ol>
			</div>
		);
	}
}

export default Paragraph;