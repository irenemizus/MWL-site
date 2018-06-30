import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import queryString from 'query-string';

import License from './License';
import Paragraph from './Paragraph';

import './Page.css';

class Page extends Component {
	render() {
		window.scrollTo(0, 0);
  		const { location } = this.props;
		const search = location.search;
		const params = queryString.parse(search);
		
		this.state = {	
			showlicense: params['showlicense'],
			url: params['url']
		}

		let paragraphsList = [];
		for (let i in this.props.page.paragraphs) {
			paragraphsList.push(
				<Paragraph key={i} paragraph={this.props.page.paragraphs[i]}  />
			)
		}
		
		let license;
			if (this.state.showlicense === 'true') {
				license = <License url={this.state.url} backUrl={location.pathname} page={this.props.page} />;
			}
			
		return (
			<div className="page">
				<div>
					{license}
					<h1>{renderHTML(this.props.page.title)}</h1>
					 {paragraphsList}
				</div>
			</div>
		);
	}
}

export default Page;