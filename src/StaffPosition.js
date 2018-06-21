import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './ArticlePagesList.css';
import './Page.css';

export default class StaffPosition extends Component {
	render() {	
		let position;
		let key = 0;
		if (this.props.associate.position && this.props.associate.acad_degree && this.props.associate.acad_title) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.position)}</span>,
		        <span key={key++}>, </span>,
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_degree)}</span>,
		        <span key={key++}>, </span>,
		        <span key={key++}
		        className="article_journal_title">{renderHTML(this.props.associate.acad_title)}</span>
		    ]
		}
		else if (this.props.associate.position && this.props.associate.acad_degree) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.position)}</span>,
		        <span key={key++}>, </span>,
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_degree)}</span>
		    ]
		}
		else if (this.props.associate.position && this.props.associate.acad_title) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.position)}</span>,
		        <span key={key++}>, </span>,
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_title)}</span>
		    ]
		}
		else if (this.props.associate.acad_degree && this.props.associate.acad_title) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_degree)}</span>,
		        <span key={key++}>, </span>,
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_title)}</span>
		    ]
		}
		else if (this.props.associate.position) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.position)}</span>
			]
		}
		else if (this.props.associate.acad_degree) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_degree)}</span>
			]
		}
		else if (this.props.associate.acad_title) {
			position = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.associate.acad_title)}</span>
			]
		}	
		
		return (
			<div>
				{position}
			</div>
		);
	}
}