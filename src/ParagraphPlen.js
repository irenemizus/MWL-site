import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import { withRouter } from 'react-router-dom';

import PlenLecture from './PlenLecture';

import './Page.css';

var PlenLectureWithHistory = withRouter(PlenLecture);

class ParagraphPlen extends Component {
	render() {
		let lecturesList = [];
		for (let i in this.props.paragraph.lectures) {
			var arti = this.props.paragraph.lectures[i];
			lecturesList.push(<PlenLectureWithHistory key={i} lect={arti} />)	
		}
		
		return (
			<div>
				<h2>{renderHTML(this.props.paragraph.title)}</h2>
				<ol>
					 {lecturesList}
				</ol>
			</div>
		);
	}
}

export default ParagraphPlen;