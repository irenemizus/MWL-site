import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

import StaffPosition from './StaffPosition';

import './ArticlePagesList.css';
import './Page.css';

export default class AssociatePage extends Component {    
  	render() {
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
			image = <img src={'/img/foto/' + this.props.associate.photo} height="185" className="leftimg"></img>
		}
		
		let selected_papers;
  		if (this.props.associate.selected_papers) {
  			selected_papers = <div><Link to={'/people/' + renderHTML(this.props.category) + '/select_' + renderHTML(this.props.page_id)}>Selected papers</Link></div>;
  		}
  		
  		let plenary_lect;
  		if (this.props.associate.plenary_lectures) {
  			plenary_lect = <div><Link to={'/people/' + renderHTML(this.props.category) + '/plenary_' + renderHTML(this.props.page_id)}>Plenary lectures</Link></div>;
  		}
  		
		return (
			<div className="page">
				<div>
					 <h1>{renderHTML(title)}</h1>
					 <StaffPosition associate={this.props.associate}/>
					 <div className="article_language">{email}</div>
					 <div className="article_language">{tel}</div>
					 <div>{image}{renderHTML(this.props.associate.biography)}</div>
					 {selected_papers}
					 {plenary_lect}
					 <div><br></br><br></br><br></br><br></br></div>
				</div>
			</div>
		);
  	}
}