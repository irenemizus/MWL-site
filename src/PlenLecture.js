import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './Page.css';

class PlenLecture extends Component {
	render() {	
		let key = 0;			
		let year;
		year = [
			<span key={key++}>{renderHTML(this.props.lect.year)}</span>,
				<span key={key++}>{renderHTML("&nbsp;&ndash;&nbsp;")}</span>
			]

		let position;
		if (this.props.lect.position) {
		    position = [
		        <span key={key++}>{renderHTML(this.props.lect.position)}</span>,
		        <span key={key++}> at </span>
		    ]
		}
		
		let conference;
		if (this.props.lect.url) {
		    conference = [
		        <span key={key++} className="article_journal_title"><a href={this.props.lect.url}>{renderHTML(this.props.lect.conference)}</a></span>,
		        <span key={key++}>, </span>
		    ]
		} else {
			conference = [
		        <span key={key++} className="article_journal_title">{renderHTML(this.props.lect.conference)}</span>,
		        <span key={key++}>, </span>
		    ]
		}
		
		let data;
		if (this.props.lect.data) {
		    data = [
		        <span key={key++}>{renderHTML(this.props.lect.data)}</span>,
		        <span key={key++}>, </span>
		    ]
		}
		
				
		let lecture_title;
		lecture_title =
				<span className="article_title">
					{renderHTML(this.props.lect.title)}
				</span>;
		
		return (
			<li className="article_item">
				{year}
				{position}
				{conference}
				{data}
				<span>&ldquo;</span>{lecture_title}<span>&rdquo;</span>
			</li>
		);
	}
}

export default PlenLecture;