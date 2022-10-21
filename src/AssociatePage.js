import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import queryString from 'query-string';

import StaffPosition from './StaffPosition';
import searchArticleByURL from './searchUtils';
import Paragraph from './ParagraphArt';
import ParagraphPlen from './ParagraphPlen';
import License from './License';

import './Page.css';

export default class AssociatePage extends Component {
 	associateIsEmpty() {
		return this.props.associate.position === "" &&
		       this.props.associate.acad_degree === "" &&
		       this.props.associate.acad_title === "";
	}

  	render() {
//  		window.scrollTo(0, 0);
  		const { location } = this.props;
		const search = location.search;
		const params = queryString.parse(search);
		
		this.state = {	
			showlicense: params['showlicense'],
			url: params['url']
		}

  		let title;
  		if (this.props.associate.full_name) {
  			title = this.props.associate.full_name;
  		}
  		else {
  			title = this.props.associate.short_name;
  		}
  		
  		let email;
  		if (this.props.associate.email) {
  			email = renderHTML('e-mail: ' + this.props.associate.email);
  		}

  		let tel;
  		if (this.props.associate.tel) {
  			tel = renderHTML('tel.: ' + this.props.associate.tel);
  		}
  		
  		let image;
		if (this.props.associate.photo) {
			image = <img alt="" src={'/img/foto/' + this.props.associate.photo.filename} style={{"height": "185px"}} className="associate_portrait"></img>
		}
		
		let paragraph_sel;
  		let license;
		if (this.props.associate.selected_papers) {
			let selected_papers = [];

  			var papi, arti;
  			for (papi in this.props.associate.selected_papers) {
  				var pagei;
  				for (pagei in this.props.data.pages) {
  					arti = searchArticleByURL(this.props.associate.selected_papers[papi], this.props.data.pages[pagei]);
  					if (arti !== null) selected_papers.push(arti);
  				}
  			}
  			
  			var paragraph;
  			paragraph = {title: "Selected papers", articles: selected_papers};
  			var page;
  			page = {title: title, paragraphs: [paragraph]};
  			paragraph_sel = <Paragraph paragraph={paragraph} show_tp={true} />
  			
			if (this.state.showlicense === 'true') {
				license = <License url={this.state.url} backUrl={location.pathname} page={page} />;
			}

  		}
  		
  		let paragraph_plen;
		if (this.props.associate.plenary_lectures) {
  			var paragraphPlen;
  			paragraphPlen = {title: "Plenary talks at the major conferences", lectures: this.props.associate.plenary_lectures};
  			paragraph_plen = <ParagraphPlen paragraph={paragraphPlen} show_tp={true} />
  		}
  		
  		let staff_desc = [];
  		let key = 0;
  		if (!this.associateIsEmpty()) {
			staff_desc.push(<StaffPosition className="associate_staff_position" associate={this.props.associate} key={key++}/>)
		}
		
		if (email !== "") {
			staff_desc.push(<div className="associate_email" key={key++}>{email}</div>)
		}

		if (tel !== "") {
			staff_desc.push(<div className="associate_tel" key={key++}>{tel}</div>)
		}

		return (
			<div className="page">
				<div>
					 <h1>{renderHTML(title)}</h1>
					 {staff_desc}
					 <div>{image}{renderHTML(this.props.associate.biography)}</div>
					 {license}
					 {paragraph_sel}
					 {paragraph_plen}
				</div>
			</div>
		);
  	}
}